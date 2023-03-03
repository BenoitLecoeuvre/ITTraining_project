﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using webapi.Models;

namespace webapi.Tools
{
    public class DataDbContext : DbContext
    {

        public string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\benoi\Desktop\OnionDevHub\Formation_m2i\project_ittraining\ITTraining_project\webapi\ITTrainingBDD.mdf;Integrated Security=True";

        public DbSet<Message> Messages { get; set; }

        public DbSet<Utilisateur> Utilisateurs { get; set; }

        public DbSet<Formation> Formations { get; set; }

        public DbSet<Todo> Todos { get; set; }

        public DbSet<Formateur> Formateurs { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
 
            modelBuilder.Entity<Todo>()
                .HasOne(t => t.Formation)
                .WithMany(f => f.TodoList)
                .HasForeignKey(t => t.FormationId)
                .OnDelete(DeleteBehavior.Cascade);
 
        }

    }
}