//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System.Data;
//using webapi.Helpers;
//using webapi.Models;
//using webapi.Tools;

//namespace webapi.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    [Authorize(Roles = Constants.RoleAdmin)]
//    public class MessageController : ControllerBase
//    {

//        private readonly DataDbContext _dbContext;

//        public MessageController(DataDbContext dbContext)
//        {
//            _dbContext = dbContext;
//        }


//        [HttpGet("[action]")]
//        public async Task<IActionResult> GetAll()
//        {
//            return Ok(await _dbContext.Messages.Include(m => m.Apprenant).ToListAsync());
//        }



//        [HttpPost("[action]")]
//        [Authorize(Roles = Constants.RoleUser)]
//        public async Task<IActionResult> AddMessage(int idStagiaire, [FromBody] Message message)
//        {
//            var tmp = (Apprenant)await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Id == idStagiaire);
//            if (tmp == null) return BadRequest("Pas de profil à cet id");

//            message.ApprenantId = tmp.Id;
//            message.Apprenant = tmp;
//            message.ReadOrNot = false;

//            await _dbContext.Messages.AddAsync(message);

//            if (await _dbContext.SaveChangesAsync() == 0) return BadRequest("Erreur");

//            return Ok("Message envoyé");

//        }


//        [HttpPut("[action]")]
//        public async Task<IActionResult> UpdateMessage(int id, [FromBody] Message message)
//        {
//            var tmp = await _dbContext.Messages.FirstOrDefaultAsync(m => m.Id == id);
//            if (tmp == null) return BadRequest("Pas de message à cet id");

//            if (tmp.Text != message.Text)
//                tmp.Text = message.Text;
//            if (tmp.Response != message.Response)
//                tmp.Response = message.Response;

//            tmp.ReadOrNot = true;


//            if (await _dbContext.SaveChangesAsync() == 0) return BadRequest("Erreur");

//            return Ok("Réponse envoyée");
//        }



//    }
//}
