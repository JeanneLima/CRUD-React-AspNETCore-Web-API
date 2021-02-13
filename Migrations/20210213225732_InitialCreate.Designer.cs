﻿// <auto-generated />
using CRUD.Web.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRUD.Web.API.Migrations
{
    [DbContext(typeof(DonationDbContext))]
    [Migration("20210213225732_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.3");

            modelBuilder.Entity("CRUD.Web.API.Models.Candidate", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("address")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("age")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("bloodGroup")
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(6)");

                    b.Property<string>("fullName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("mobile")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("id");

                    b.ToTable("Candidate");

                    b.HasData(
                        new
                        {
                            id = 1,
                            address = "Rua do Expedicionário, 12, São Cristóvão - RJ, Rio de Janeiro",
                            age = "47",
                            bloodGroup = "O+",
                            email = "rose.manhaes@gmail.com",
                            fullName = "Rose Manhães",
                            mobile = "Lorem ipsum"
                        },
                        new
                        {
                            id = 2,
                            address = "Rua Dias da Cruz, 106, Méier - RJ, Rio de Janeiro",
                            age = "28",
                            bloodGroup = "AB+",
                            email = "gustavo.lima@gmail.com",
                            fullName = "Gustavo Lima",
                            mobile = "Lorem ipsum"
                        },
                        new
                        {
                            id = 3,
                            address = "Rua Santa Fé, 960, Inhaúma - RJ, Rio de Janeiro",
                            age = "34",
                            bloodGroup = "A+",
                            email = "claudia.martins@gmail.com",
                            fullName = "Claudia Martins",
                            mobile = "Lorem ipsum"
                        },
                        new
                        {
                            id = 4,
                            address = "Rua Ernani Agricola, 73, Itanhangá - RJ, Rio de Janeiro",
                            age = "74",
                            bloodGroup = "O-",
                            email = "jose.goncalves@gmail.com",
                            fullName = "José Gonçalves",
                            mobile = "Lorem ipsum"
                        },
                        new
                        {
                            id = 5,
                            address = "Travessa Ricardo Barbosa, 15, Freguesia (Jacarepaguá) - RJ, Rio de Janeiro",
                            age = "18",
                            bloodGroup = "B+",
                            email = "pedro.lucas@gmail.com",
                            fullName = "Pedro Lucas",
                            mobile = "Lorem ipsum"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
