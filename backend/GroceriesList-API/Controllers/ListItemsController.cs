#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GroceriesList_API.Data;
using GroceriesList_API.Models;

namespace GroceriesList_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ListItemsController : ControllerBase
    {
        private readonly GroceriesList_APIContext _context;

        public ListItemsController(GroceriesList_APIContext context)
        {
            _context = context;
        }

        // GET: api/ListItems
        /// <summary>
        /// List all Items in the Grocery list
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListItem>>> GetListItems()
        {
            return await _context.ListItems.ToListAsync();
        }

        // GET: api/ListItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ListItem>> GetListItem(long id)
        {
            var listItem = await _context.ListItems.FindAsync(id);

            if (listItem == null)
            {
                return NotFound();
            }

            return listItem;
        }

        // PUT: api/ListItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutListItem(long id, ListItem listItem)
        {
            if (id != listItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(listItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ListItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ListItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ListItem>> PostListItem(ListItem listItem)
        {
            _context.ListItems.Add(listItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetListItem", new { id = listItem.Id }, listItem);
        }

        // DELETE: api/ListItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListItem(long id)
        {
            var listItem = await _context.ListItems.FindAsync(id);
            if (listItem == null)
            {
                return NotFound();
            }

            _context.ListItems.Remove(listItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ListItemExists(long id)
        {
            return _context.ListItems.Any(e => e.Id == id);
        }
    }
}
