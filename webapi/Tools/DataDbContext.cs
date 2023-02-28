﻿using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Tools
{
    public class DataDbContext : DbContext
    {

        public string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Administrateur\Desktop\ITTraining_Vraie_Version_Finale\ITTraining_project\webapi\ITTrainingBDD.mdf;Integrated Security=True";

        public DbSet<Message> Messages { get; set; }

        public DbSet<Utilisateur> Utilisateurs { get;  set; }

        public DbSet<Formation> Formations { get; set; }

        public DbSet<Todo> Todos { get; set; }

        public DbSet<Formateur> Formateurs { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }



    }
}