﻿using Microsoft.AspNetCore.Mvc;
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
using Microsoft.AspNetCore.Authorization;
using System.Data;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = Constants.RoleAdmin)]
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

        // Création d'un compte stagiaire
        [HttpPost("[action]")]
        //[AllowAnonymous]
        public async Task<IActionResult> RegisterStagiaire([FromBody] Apprenant apprenant)
        {
            if (await _dbContext.Apprenants.FirstOrDefaultAsync(u => u.Email == apprenant.Email) != null)
                return BadRequest("Un compte avec cet email est déjà existant !");

            apprenant.Password = EncryptPassword(apprenant.Password);
            apprenant.Status = "user";
            apprenant.Inscrit = false;

            await _dbContext.Apprenants.AddAsync(apprenant);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil stagiaire enregistré");
            return BadRequest("Erreur...");

        }

        // Création d'un compte admin
        [HttpPost("[action]")]
        public async Task<IActionResult> RegisterAdmin([FromBody] Utilisateur utilisateur)
        {
            if (await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == utilisateur.Email) != null)
                return BadRequest("Un compte avec cet email est déjà existant !");

            utilisateur.Password = EncryptPassword(utilisateur.Password);
            utilisateur.Status = "admin";

            await _dbContext.Utilisateurs.AddAsync(utilisateur);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil admin enregistré");
            return BadRequest("Erreur...");

        }


        [HttpPost("[action]")]
        //[AllowAnonymous]
        public async Task<IActionResult> LoginAdmin([FromBody] LoginRequestDTO login)
        {
            login.PassWord = EncryptPassword(login.PassWord);
            var utilisateur = await _dbContext.Utilisateurs.FirstOrDefaultAsync(u => u.Email == login.Email && u.Password == login.PassWord);

            if (utilisateur == null)
            {
                return BadRequest("Pas de compte avec cet adresse email");

            }

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

        // Voir pour ajouter un role formateur
        [HttpPost("loginFormateur")]
        //[AllowAnonymous]
        public async Task<IActionResult> LoginFormateur([FromBody] LoginRequestDTO login)
        {
            login.PassWord = EncryptPassword(login.PassWord);
            var utilisateur = await _dbContext.Formateurs.FirstOrDefaultAsync(u => u.Email == login.Email && u.Password == login.PassWord);

            if (utilisateur == null)
            {
                return BadRequest("Pas de compte avec cet adresse email");

            }

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


        // Voir pour ajouter un role formateur
        [HttpPost("loginStagiaire")]
        //[AllowAnonymous]
        public async Task<IActionResult> LoginStagiaire([FromBody] LoginRequestDTO login)
        {
            login.PassWord = EncryptPassword(login.PassWord);
            var stagiaire = await _dbContext.Apprenants.FirstOrDefaultAsync(u => u.Email == login.Email && u.Password == login.PassWord);

            if (stagiaire == null)
            {
                return BadRequest("Pas de compte avec cet adresse email");

            }

            var role = stagiaire.Status;

            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Role, role),
                new Claim(ClaimTypes.NameIdentifier, stagiaire.Id.ToString()),
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
                User = stagiaire
            });

        }



        [HttpPost("[action]")]
        //[AllowAnonymous]
        public async Task<IActionResult> RegisterFormateur([FromBody] Formateur formateur)
        {
            if (await _dbContext.Formateurs.FirstOrDefaultAsync(u => u.Email == formateur.Email) != null)
                return BadRequest("Un compte avec cet email est déjà existant !");

            formateur.Password = EncryptPassword(formateur.Password);
            formateur.Status = "user";

            await _dbContext.Formateurs.AddAsync(formateur);
            if (await _dbContext.SaveChangesAsync() > 0)
                return Ok("Profil formateur enregistré");
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

