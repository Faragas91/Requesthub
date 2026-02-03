using Microsoft.EntityFrameworkCore;
using Requesthub.Api.Models;

namespace Requesthub.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Request> Requests { get; set; } = null!;
    }
}