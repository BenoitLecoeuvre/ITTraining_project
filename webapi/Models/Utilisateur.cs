using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    [Table("Utilisateur")]
    public class Utilisateur
    {
        public int Id { get; set; }

        public string Nom { get; set; }
        public string Prenom { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Status { get; set; }


    }
}
