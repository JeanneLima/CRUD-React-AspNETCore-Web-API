using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD.Web.API.Models
{
    public class DonationDbContext:DbContext
    {
        public DonationDbContext(DbContextOptions<DonationDbContext> options) : base(options)
        {

        }

        public DbSet<Candidate> Candidate { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidate>().HasData(
                new Candidate { id = 1, fullName = "Rose Manhães", mobile = "Lorem ipsum", email = "rose.manhaes@gmail.com", age = "47", bloodGroup = "O+", address = "Rua do Expedicionário, 12, São Cristóvão - RJ, Rio de Janeiro" },
                new Candidate { id = 2, fullName = "Gustavo Lima", mobile = "Lorem ipsum", email = "gustavo.lima@gmail.com", age = "28", bloodGroup = "AB+", address = "Rua Dias da Cruz, 106, Méier - RJ, Rio de Janeiro" },
                new Candidate { id = 3, fullName = "Claudia Martins", mobile = "Lorem ipsum", email = "claudia.martins@gmail.com", age = "34", bloodGroup = "A+", address = "Rua Santa Fé, 960, Inhaúma - RJ, Rio de Janeiro" },
                new Candidate { id = 4, fullName = "José Gonçalves", mobile = "Lorem ipsum", email = "jose.goncalves@gmail.com", age = "74", bloodGroup = "O-", address = "Rua Ernani Agricola, 73, Itanhangá - RJ, Rio de Janeiro" },
                new Candidate { id = 5, fullName = "Pedro Lucas", mobile = "Lorem ipsum", email = "pedro.lucas@gmail.com", age = "18", bloodGroup = "B+", address = "Travessa Ricardo Barbosa, 15, Freguesia (Jacarepaguá) - RJ, Rio de Janeiro" }
            );
        }
    }
}
