using Microsoft.AspNetCore.Mvc;
using webapi.Helpers;
using webapi.Tools;
using webapi.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;
using Microsoft.Extensions.Options;
using webapi.DTO;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Runtime;
using System.IdentityModel.Tokens.Jwt;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {

        private DataDbContext _dbContext;
        private AppSettings _appSettings;
        private readonly string _securityKey = "clé méga giga super secrète";


        public AuthenticationController(DataDbContext dbContext, IOptions<AppSettings> appSettings)
        {
            _dbContext = dbContext;
            _appSettings = appSettings.Value;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> RegisterStagiaire([FromBody] Apprenant apprenant)
        {
            if (await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == apprenant.Email) != null)
                return BadRequest("Un compte avec cet email est déjà existant !");

            apprenant.Password = EncryptPassword(apprenant.Password);
            apprenant.Status = "user";
            apprenant.Inscrit = false;

            await _dbContext.Utilisateurs.AddAsync(apprenant);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil stagiaire enregistré");
            return BadRequest("Erreur...");

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO login)
        {
            login.PassWord = EncryptPassword(login.PassWord);
            var utilisateur = await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == login.Email && u.Password == login.PassWord);

            if (utilisateur == null) return BadRequest("Pas de compte avec cet adresse email");

            var role = utilisateur.Status;

            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Role, role),
                new Claim(ClaimTypes.NameIdentifier, utilisateur.Id.ToString()),
            };

            SigningCredentials signingCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_appSettings.SecretKey!)), SecurityAlgorithms.HmacSha256);

            JwtSecurityToken jwt = new JwtSecurityToken(
                issuer: _appSettings.ValidIssuer,
                audience: _appSettings.ValidAudience,
                claims: claims,
                signingCredentials: signingCredentials,
                expires: DateTime.Now.AddDays(7));

            var token = new JwtSecurityTokenHandler().WriteToken(jwt);

            return Ok(new
            {
                Token = token,
                Message = "Connexion réussie !",
                User = utilisateur
            });

        }


        public async Task<IActionResult> RegisterFormateur([FromBody] Formateur formateur)
        {
            if (await _dbContext.Formateurs.FirstOrDefaultAsync(u => u.Email == formateur.Email) != null)
                return BadRequest("Un compte avec cet email est déjà existant !");

            formateur.Password = EncryptPassword(formateur.Password);
            formateur.Status = "user";

            await _dbContext.Formateurs.AddAsync(formateur);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil stagiaire enregistré");
            return BadRequest("Erreur...");

        }




        [NonAction]
        private string EncryptPassword(string? password)
        {
            if (string.IsNullOrEmpty(password)) return "";
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(password + _securityKey));
        }


        [NonAction]
        private string DecryptPassword(string? cryptedString)
        {
            if (string.IsNullOrEmpty(cryptedString)) return "";
            string decryptedString = Encoding.UTF8.GetString(Convert.FromBase64String(cryptedString));
            return decryptedString.Substring(0, decryptedString.Length - _securityKey!.Length);
        }


    }
}
