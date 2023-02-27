using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Tools
{
    public class DataDbContext : DbContext
    {

        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {

        }

        public string ConnectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Administrateur\Desktop\IT_Training_Version_Finale\webapi\ITTrainingBDD.mdf;Integrated Security=True";

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
