﻿using Microsoft.AspNetCore.Mvc;
using System.Net;
using webapi.Repositories;
using webapi.Tools;
using webapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using webapi.Helpers;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = Constants.RoleAdmin)]
    public class FormationController : ControllerBase
    {
        private readonly DataDbContext _dbContext;
        private IRepository<Formation> _formationRepository;

        public FormationController(DataDbContext dbContext, IRepository<Formation> formationRepository)
        {
            _dbContext = dbContext;
            _formationRepository = formationRepository;
        }

        [HttpGet("/formations")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllFormations()
        {
            List<Formation> formations;
            formations = (await _formationRepository.GetAll()).ToList();

            return Ok(formations);
        }

        [HttpPost("/formations")]
        public async Task<IActionResult> AddFormation([FromBody] Formation formation)
        {
            await _dbContext.Formations.AddAsync(formation);

            if (await _dbContext.SaveChangesAsync() >= 1)
                return Ok("Formation ajoutée au catalogue!");

            return BadRequest("Une erreur est survenue...");
        }

        [HttpPut("/formations/{id}")]
        public async Task<IActionResult> UpdateFormation(int id, [FromBody] Formation formation, int? formateurId, int? todoId)
        {

            // Modification des éléments principaux de la formation
            var formationFromDb = await _dbContext.Formations.FirstOrDefaultAsync(p => p.Id == id);
            if (formationFromDb == null)
            {
                return NotFound("Pas de formation à cet ID");
            }
            else
            {
                formationFromDb.Name = formation.Name;
                formationFromDb.Category = formation.Category;
                formationFromDb.SubCategory = formation.SubCategory;
                formationFromDb.Description = formation.Description;
                formationFromDb.DescriptionDetail = formation.DescriptionDetail;
                formationFromDb.Duree = formation.Duree;
                formationFromDb.Price = formation.Price;
                formationFromDb.Difficulty = formation.Difficulty;
                formationFromDb.Lieu = formation.Lieu;
                formationFromDb.StartDate = formation.StartDate;
                formationFromDb.Logo = formation.Logo;
                formationFromDb.Status = formation.Status;
                formationFromDb.ApprenantsList = formation.ApprenantsList;
                formationFromDb.TodoList = formation.TodoList;

                // ajout d'un formateur à la formation (optionnel)
                //var formateurFromDb = _dbContext.Formateurs.FirstOrDefault(f => f.Id == formateurId);
                //if (formateurFromDb == null)
                //{
                //    return NotFound("Pas de formateur à cet ID");
                //}
                //else
                //{
                //    formationFromDb.Formateur = formateurFromDb;
                //    formationFromDb.Formateur.Prenom = formateurFromDb.Prenom;
                //    formationFromDb.Formateur.Nom = formateurFromDb.Nom;
                //}

                // Mise à jour de la TodoList
                //var todoFromDB = formationFromDb.TodoList.FirstOrDefault(t => t.Id == todoId);
                //if (todoFromDB == null)
                //{
                //    return NotFound("Pas de Todo à cet ID");
                //}
                //else
                //{
                //    todoFromDB.Status = formationFromDb.TodoList.FirstOrDefault(t => t.Id == todoId).Status;
                //    //todoFromDB.Status = formation.TodoList.FirstOrDefault(t => t.Id == todoId).Status;
                //}

                if (await _dbContext.SaveChangesAsync() > 0)
                {
                    return Ok("formation modifiée !");
                }
                else return BadRequest("Une erreur est survenue...");
            }
        }

        [HttpDelete("/formations/{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            var formation = await _formationRepository.GetById(id);

            if (formation == null) return NotFound(new
            {
                Message = "Aucune formation avec cet ID"
            });

            if (!await _formationRepository.Delete(id)) return BadRequest("Une erreur est survenue...");

            return Ok("Formation supprimé");
        }

    }
}
