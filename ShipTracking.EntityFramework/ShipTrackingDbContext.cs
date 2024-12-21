namespace ShipTracking.EntityFramework;

using Microsoft.EntityFrameworkCore;
using ShipTracking.EntityFramework.Models;

public class ShipTrackingDbContext : DbContext
{
    public ShipTrackingDbContext(DbContextOptions<ShipTrackingDbContext> options) : base(options)
    {

    }

    public DbSet<TestCounter> TestCounters => Set<TestCounter>();
}
