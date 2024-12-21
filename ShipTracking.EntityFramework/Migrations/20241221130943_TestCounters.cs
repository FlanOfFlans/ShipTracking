#nullable disable

namespace ShipTracking.EntityFramework.Migrations;
using Microsoft.EntityFrameworkCore.Migrations;

/// <inheritdoc />
public partial class TestCounters : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "TestCounters",
            columns: table => new
            {
                Id = table.Column<Guid>(type: "uuid", nullable: false),
                Count = table.Column<int>(type: "integer", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_TestCounters", x => x.Id);
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "TestCounters");
    }
}
