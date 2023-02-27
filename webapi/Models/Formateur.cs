using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Formateur
    {
        public int Id { get; set; }

        public string Nom { get; set; }
        public string Prenom { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Status { get; set; }
        public int Anciennete { get; set; }
        public int Note { get; set; }
        public string SubCategory { get; }

        public string Phone { get; set; }

        public List<Formation> FormationsList { get; set; }


        public Formateur()
        {
            FormationsList = new List<Formation>();
        }






    }
}
