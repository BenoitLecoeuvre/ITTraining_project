﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using webapi.Models;

namespace webapi.Tools
{
    public class DataDbContext : DbContext
    {

        public string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Administrateur\Desktop\BddTest\ITTrainingBDD.mdf;Integrated Security=True;Connect Timeout=30";

        public DbSet<Message> Messages { get; set; }

        public DbSet<Utilisateur> Utilisateurs { get; set; }

        public DbSet<Formation> Formations { get; set; }

        public DbSet<Todo> Todos { get; set; }

        public DbSet<Formateur> Formateurs { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }



    }
}
