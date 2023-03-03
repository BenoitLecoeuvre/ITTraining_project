using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Message
    {

        public int Id { get; set; }

        public string Text { get; set; }

        [ForeignKey(nameof(ApprenantId))]
        public Apprenant? Apprenant { get; set; }

        public int? ApprenantId { get; set; }

        //public DateTime Date { get; set; }

        public bool ReadOrNot { get; set; }

        public string? Response { get; set; }


        //public Message()
        //{
        //    Date = DateTime.Now;
        //}



    }
}
