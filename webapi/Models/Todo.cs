using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Todo
    {


        public int Id { get; set; }

        public string Nom { get; set; }

        public string Detail { get; set; }

        public DateTime DateRealisation { get; set; }

        public string Status { get; set; }

        [ForeignKey(nameof(FormationId))]
        public Formation? Formation { get; set; }

        public int? FormationId { get; set; }

    }
}
