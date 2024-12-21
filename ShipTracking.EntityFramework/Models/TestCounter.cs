namespace ShipTracking.EntityFramework.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class TestCounter : IEntityTypeConfiguration<TestCounter>
{
    public Guid Id { get; set; }

    public int Count { get; set; }

    public void Configure(EntityTypeBuilder<TestCounter> builder)
    { }
}
