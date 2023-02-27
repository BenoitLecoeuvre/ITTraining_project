using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Tools
{
    public class DataDbContext : DbContext
    {

        public string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Administrateur\Desktop\DEV\ITTraining\ITTraining\webapi\ITTrainingBDD.mdf;Integrated Security=True;Connect Timeout=30";

        public DbSet<Message> Messages { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Formation> Formations { get; set; }

        public DbSet<Todo> Todos { get; set; }

        public DbSet<Formateur> Formateurs { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }



    }
}
