using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Formation
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Category { get; set; }

        public string SubCategory { get; set; }

        public string Description { get; set; }

        public string DescriptionDetail { get; set; }

        public int Duree { get; set; }

        public decimal Price { get; set; }

        public int Difficulty { get; set; }

        public LieuCentre Lieu { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public string? Logo { get; set; }

        public string Status { get; set; }

        public int NbInscrit { get; set; }

        public List<Todo>? TodoList { get; set; }

        public List<Apprenant>? ApprenantsList { get; set; }

        public Formateur? Formateur { get; set; }

        public int? FormateurId { get; set; }

        public enum LieuCentre
        {
            Lille,
            Paris,
        }

        public Formation()
        {
            //TodoList = new List<Todo>
            //{
            //    new Todo
            //    {
            //        Nom = "Réservation de la salle",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Installation des machines et des logiciels requis",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Confirmation du formateur",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Impression des supports de cours",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Envoi des convocations",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Mise à jour du planning",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },
            //    new Todo
            //    {
            //        Nom = "Impression des listes de présence",
            //        Detail = "",
            //        DateRealisation = DateTime.Now,
            //        Status = "A faire"
            //    },

            //};
            ApprenantsList = new List<Apprenant>();
        }
    }
}
