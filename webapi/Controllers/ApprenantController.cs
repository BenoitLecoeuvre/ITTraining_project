using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;
using webapi.Models;
using webapi.Tools;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprenantController : ControllerBase
    {

        private DataDbContext _dbContext;
        private readonly string _securityKey = "clé méga giga super secrète";

        public ApprenantController(DataDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("/admin/stagiaires")]
        public async Task<IActionResult> GetStagiaires()
        {
            return Ok(await _dbContext.Apprenants.ToListAsync());
        }


        // Modification d'un profil stagiaire
        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateStagiaire(int id, [FromBody] Apprenant apprenant)
        {
            var tmp = await _dbContext.Apprenants.FirstOrDefaultAsync(a => a.Id == id);
            if (tmp == null) return BadRequest("Pas de profil à cet id");

            if (tmp.Nom != apprenant.Nom)
                tmp.Nom = apprenant.Nom;
            if (tmp.Prenom != apprenant.Prenom)
                tmp.Prenom = apprenant.Prenom;
            if (tmp.Email != apprenant.Email)
                tmp.Email = apprenant.Email;
            if (tmp.Phone != apprenant.Phone)
                tmp.Phone = apprenant.Phone;
            if (tmp.Entreprise != apprenant.Entreprise)
                tmp.Entreprise = apprenant.Entreprise;
            if (tmp.Inscrit != apprenant.Inscrit)
                tmp.Inscrit = apprenant.Inscrit;

            tmp.Password = EncryptPassword(apprenant.Password);
            tmp.Status = "user";
            if (await _dbContext.SaveChangesAsync() == 0) return BadRequest("Erreur");

            return Ok("Profil mis à jour");

        }


        // Ajouter une formation à un stagiaire
        [HttpPost("[action]")]
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> AddFormation(int stagiaireId, int formationId)
        {
            var tmp = await _dbContext.Apprenants.FirstOrDefaultAsync(s => s.Id == stagiaireId);
            if (tmp == null) return BadRequest("Pas de profil à cet id");

            if (tmp.Inscrit) return BadRequest("Stagiaire déjà inscrit à une formation");

            var formation = await _dbContext.Formations.FirstOrDefaultAsync(f => f.Id == formationId);
            if (formation == null) return BadRequest("Pas de formation à cet id");

            if (formation.NbInscrit == 15) return BadRequest("Formation complète");

            tmp.FormationId = formationId;
            tmp.Inscrit = true;
            formation.NbInscrit++;
            if (await _dbContext.SaveChangesAsync() == 0) return BadRequest("Erreur");

            return Ok("Formation ajoutée");
        }



        [NonAction]
        private string EncryptPassword(string? password)
        {
            if (string.IsNullOrEmpty(password)) return "";
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(password + _securityKey));
        }

    }
}
