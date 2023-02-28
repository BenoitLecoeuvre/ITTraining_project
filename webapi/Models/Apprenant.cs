using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Apprenant : Utilisateur
    {
        public string Phone { get; set; }

        public bool Inscrit { get; set; }

        [ForeignKey(nameof(FormationId))]
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
