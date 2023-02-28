using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class nullableadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Formations_Formateurs_FormateurId",
                table: "Formations");

            migrationBuilder.AlterColumn<int>(
                name: "FormateurId",
                table: "Formations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Formations_Formateurs_FormateurId",
                table: "Formations",
                column: "FormateurId",
                principalTable: "Formateurs",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Formations_Formateurs_FormateurId",
                table: "Formations");

            migrationBuilder.AlterColumn<int>(
                name: "FormateurId",
                table: "Formations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Formations_Formateurs_FormateurId",
                table: "Formations",
                column: "FormateurId",
                principalTable: "Formateurs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
