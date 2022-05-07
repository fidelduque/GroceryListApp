using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using GroceriesList_API.Models;

namespace GroceriesList_API.Data
{
    public partial class GroceriesList_APIContext : DbContext
    {
        public GroceriesList_APIContext()
        {
        }

        public GroceriesList_APIContext(DbContextOptions<GroceriesList_APIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ListItem> ListItems { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
