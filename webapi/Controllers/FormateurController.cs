using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Repositories;
using webapi.Tools;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormateurController : ControllerBase
    {

        private readonly DataDbContext _dbContext;
        private IRepository<Formateur> _formateurRepository;

        public FormateurController(DataDbContext dbContext, IRepository<Formateur> formateurRepository)
        {
            _dbContext = dbContext;
            _formateurRepository = formateurRepository;
        }

        [HttpGet("/formateurs")]
        public async Task<IActionResult> GetAllFormations()
        {
            List<Formateur> formateurs;
            formateurs = (await _formateurRepository.GetAll()).ToList();

            return Ok(formateurs);
        }

        [HttpPost("/formateurs")]
        public async Task<IActionResult> AddFormateur([FromBody] Formateur formateur)
        {
            await _dbContext.Formateurs.AddAsync(formateur);

            if (await _dbContext.SaveChangesAsync() >= 1)
                return Ok("Formateur ajouté à la base de données!");

            return BadRequest("Une erreur est survenue...");
        }

        [HttpPut("/formateurs/{id}")]
        public async Task<IActionResult> UpdateFormateur(int id, [FromBody] Formateur formateur)
        {
            var formateurFromDb = _dbContext.Formateurs.FirstOrDefault(p => p.Id == id);

            if (formateurFromDb == null)
            {
                return NotFound("Pas de formation à cet ID");
            }
            else
            {
                formateurFromDb.Nom = formateur.Nom;
                formateurFromDb.Prenom = formateur.Prenom;
                formateurFromDb.Email = formateur.Email;
                formateurFromDb.Phone = formateur.Phone;
                formateurFromDb.Status = formateur.Status;
                formateurFromDb.Anciennete = formateur.Anciennete;
                formateurFromDb.FormationsList = formateur.FormationsList;
                if (_dbContext.SaveChanges() > 0)
                {
                    return Ok("formateur modifié");
                }
                else return BadRequest("Une erreur est survenue...");
            }

        }

        [HttpDelete("/formateurs/{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            var formateur = _formateurRepository.GetById(id);

            if (formateur == null) return NotFound(new
            {
                Message = "Aucun formateur avec cet ID"
            });

            if (!await _formateurRepository.Delete(id)) return BadRequest("Une erreur est survenue...");

            return Ok("Formateur supprimé");
        }

    }
}
