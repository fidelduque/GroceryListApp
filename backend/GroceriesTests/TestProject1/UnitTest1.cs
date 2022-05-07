using Xunit;
using GroceriesList_API.Controllers;
namespace TestProject1
{
    public class UnitTest1
    {

        private readonly ListItemsController _controller;
        [Fact]
        public void TestGetListItems()
        {
            var itemList = _controller.GetListItems();
            Assert.NotNull(itemList);

        }

        [Fact]
        public void TestGetListItem()
        {
            var itemList = _controller.GetListItem(2);
            Assert.NotNull(itemList);

        }
    }
}