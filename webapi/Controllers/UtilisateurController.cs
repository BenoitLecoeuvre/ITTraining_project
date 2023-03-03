using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;
using webapi.Helpers;
using webapi.Models;
using webapi.Tools;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = Constants.RoleAdmin)]
    public class UtilisateurController : ControllerBase
    {

        private DataDbContext _dbContext;
        private readonly string _securityKey = "clé méga giga super secrète";

        public UtilisateurController(DataDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // Afficher la liste complète des profil admin uniquement
        [HttpGet("Admin")]
        public async Task<IActionResult> GetAdmin()
        {
            return Ok(await _dbContext.Utilisateurs.Where(a => a.Status == "admin").ToListAsync());
        }

        // Donner la possibilité à un admin de créer un profil admin
        [HttpPost("[action]")]
        public async Task<IActionResult> AddAdmin([FromBody] Utilisateur user)
        {
            // On vérifie s'il existe déjà un compte avec cet email
            var tmp = await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (tmp != null) return BadRequest("Un compte avec cet email est déjà existant !");

            user.Password = EncryptPassword(user.Password);
            user.Status = "admin";

            await _dbContext.Utilisateurs.AddAsync(user);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil admin créé");

            return BadRequest("Erreur");
        }

        // Création d'un profil stagiaire par un admin
        // A voir si c'est pertinent de le garder
        //[HttpPost("[action]")]
        //[AllowAnonymous]
        //public async Task<IActionResult> AddStagiaire([FromBody] Apprenant apprenant)
        //{
        //    // On vérifie s'il existe déjà un compte avec cet email
        //    var tmp = await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == apprenant.Email);
        //    if (tmp != null) return BadRequest("Un compte avec cet email est déjà existant !");

        //    apprenant.Password = EncryptPassword(apprenant.Password);
        //    apprenant.Status = "user";
        //    apprenant.Inscrit = false;

        //    await _dbContext.Utilisateurs.AddAsync(apprenant);
        //    if (await _dbContext.SaveChangesAsync() > 0)
        //        return Ok("Profil stagiaire créé");

        //    return BadRequest("Erreur");

        //}


        // Suppression d'un profil
        [HttpDelete("[action]")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _dbContext.Utilisateurs.FindAsync(id);
            if (user == null) return BadRequest("Profil non trouvé");

            _dbContext.Utilisateurs.Remove(user);

            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil supprimé");

            return BadRequest("Erreur");
        }


        // Modification d'un profil admin
        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateAdmin(int id, [FromBody] Utilisateur user)
        {
            var tmp = await _dbContext.Utilisateurs.FirstOrDefaultAsync(x => x.Id == id);
            if (tmp == null) return BadRequest("Pas de profil à cet id");

            if (tmp.Nom != user.Nom)
                tmp.Nom = user.Nom;
            if (tmp.Prenom != user.Prenom)
                tmp.Prenom = user.Prenom;
            if (tmp.Email != user.Email)
                tmp.Email = user.Email;

            tmp.Password = EncryptPassword(user.Password);
            tmp.Status = "admin";

            if (await _dbContext.SaveChangesAsync() == 0) return BadRequest("Erreur");

            return Ok("Profil mis à jour");

        }




        [NonAction]
        private string EncryptPassword(string? password)
        {
            if (string.IsNullOrEmpty(password)) return "";
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(password + _securityKey));
        }



    }
}
