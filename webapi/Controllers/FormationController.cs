using Microsoft.AspNetCore.Mvc;
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
    //[Authorize(Roles = Constants.RoleAdmin)]
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
        //[AllowAnonymous]
        public async Task<IActionResult> GetAllFormations()
        {
            List<Formation> formations;
            formations = (await _formationRepository.GetAll()).ToList();

            return Ok(formations);
        }

        [HttpPost("/admin/formations")]
        public async Task<IActionResult> AddFormation([FromBody] Formation formation)
        {
            formation.NbInscrit = 0;
            formation.Status = "";
            await _dbContext.Formations.AddAsync(formation);

            if (await _dbContext.SaveChangesAsync() >= 1)
                return Ok("Formation ajoutée au catalogue!");

            return BadRequest("Une erreur est survenue...");
        }

        [HttpPut("/admin/formations/{id}")]
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

                //// ajout d'un formateur à la formation (optionnel)
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

                if (await _dbContext.SaveChangesAsync() > 0)
                {
                    return Ok("formation modifiée !");
                }
                else return BadRequest("Une erreur est survenue...");
            }
        }

        [HttpDelete("/admin/{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            var formation = await _formationRepository.GetById(id);

            if (formation == null)
            {
                return NotFound(new
                {
                    Message = "Aucune formation avec cet ID"
                });
            }
            else
            {
                if (!await _formationRepository.Delete(id)) return BadRequest("Une erreur est survenue...");
                else return Ok("Formation supprimé");
            }
        }

        [HttpGet("/formations/{formationId}/todolist")]
        public async Task<IActionResult> GetAllTodos(int formationId)
        {
            var formationFromDB = _dbContext.Formations.FirstOrDefault(f => f.Id == formationId);
            if (formationFromDB == null)
            {
                return BadRequest("Pas de formation à cet Id...");
            }
            else
            {
                List<Todo> todoList = _dbContext.Todos.Where(t => t.FormationId == formationId).ToList();
                if (todoList == null)
                {
                    return BadRequest("Pas de TodoList disponible pour cette formation...");
                }

                return Ok(todoList);
            }
        }

        [HttpPut("/formations/{formationId}/todolist/{todoId}")]
        public async Task<IActionResult> UpdateTodo([FromBody] Todo todo, int formationId, int todoId)
        {
            var formationFromDB = _dbContext.Formations.FirstOrDefault(f => f.Id == formationId);
            if (formationFromDB == null)
            {
                return BadRequest("Pas de formation à cet Id...");
            }
            else
            {
                var todoFromDB = _dbContext.Todos.FirstOrDefault(t => t.Id == todoId);
                if (todoFromDB == null)
                {
                    return BadRequest("Pas de Todo à cet Id");
                }
                else
                {
                    if (todoFromDB.Status != todo.Status)
                    {
                        todoFromDB.Status = todo.Status;
                        todoFromDB.DateRealisation = DateTime.Now;
                    }
                    if (todoFromDB.Detail != todo.Detail)
                        todoFromDB.Detail = todo.Detail;
                }
                if (_dbContext.SaveChanges() > 0)
                {
                    return Ok("Todo mise à jour !");
                }
                else return BadRequest("Une erreur est survenue...");
            }
        }
    }
}
