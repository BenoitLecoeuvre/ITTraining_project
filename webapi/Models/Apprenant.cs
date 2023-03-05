using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Apprenant
    {

        public int Id { get; set; }

        public string Nom { get; set; }
        public string Prenom { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Status { get; set; }
        public string Phone { get; set; }

        public bool Inscrit { get; set; }

        public Formation? Formation { get; set; }

        public int? FormationId { get; set; }

        public List<Message>? MessagesList { get; set; }

        public string? Entreprise  { get; set; }
        public Apprenant()
        {
            MessagesList = new List<Message>();
        }

        



    }
}
