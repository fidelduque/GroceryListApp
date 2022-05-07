using System;
using System.Collections.Generic;

namespace GroceriesList_API.Models
{
    public partial class ListItem
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public long Done { get; set; }
    }
}
