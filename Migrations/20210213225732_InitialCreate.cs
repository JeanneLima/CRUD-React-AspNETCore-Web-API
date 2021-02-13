using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD.Web.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidate",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    fullName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    mobile = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(6)", nullable: true),
                    age = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    bloodGroup = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidate", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "Candidate",
                columns: new[] { "id", "address", "age", "bloodGroup", "email", "fullName", "mobile" },
                values: new object[] { 1, "Rua do Expedicionário, 12, São Cristóvão - RJ, Rio de Janeiro", "47", "O+", "rose.manhaes@gmail.com", "Rose Manhães", "Lorem ipsum" });

            migrationBuilder.InsertData(
                table: "Candidate",
                columns: new[] { "id", "address", "age", "bloodGroup", "email", "fullName", "mobile" },
                values: new object[] { 2, "Rua Dias da Cruz, 106, Méier - RJ, Rio de Janeiro", "28", "AB+", "gustavo.lima@gmail.com", "Gustavo Lima", "Lorem ipsum" });

            migrationBuilder.InsertData(
                table: "Candidate",
                columns: new[] { "id", "address", "age", "bloodGroup", "email", "fullName", "mobile" },
                values: new object[] { 3, "Rua Santa Fé, 960, Inhaúma - RJ, Rio de Janeiro", "34", "A+", "claudia.martins@gmail.com", "Claudia Martins", "Lorem ipsum" });

            migrationBuilder.InsertData(
                table: "Candidate",
                columns: new[] { "id", "address", "age", "bloodGroup", "email", "fullName", "mobile" },
                values: new object[] { 4, "Rua Ernani Agricola, 73, Itanhangá - RJ, Rio de Janeiro", "74", "O-", "jose.goncalves@gmail.com", "José Gonçalves", "Lorem ipsum" });

            migrationBuilder.InsertData(
                table: "Candidate",
                columns: new[] { "id", "address", "age", "bloodGroup", "email", "fullName", "mobile" },
                values: new object[] { 5, "Travessa Ricardo Barbosa, 15, Freguesia (Jacarepaguá) - RJ, Rio de Janeiro", "18", "B+", "pedro.lucas@gmail.com", "Pedro Lucas", "Lorem ipsum" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidate");
        }
    }
}
