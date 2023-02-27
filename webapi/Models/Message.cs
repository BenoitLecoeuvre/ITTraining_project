using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Message
    {

        public int id { get; set; }

        public string Text { get; set; }

        [ForeignKey(nameof(ApprenantId))]
        public Apprenant Apprenant { get; set; }

        public int ApprenantId { get; set; }

        public DateTime Date { get; set; }

        public bool ReadOrNot { get; set; }


    }
}
