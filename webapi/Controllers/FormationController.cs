using Microsoft.AspNetCore.Mvc;
using System.Net;
using webapi.Repositories;
using webapi.Tools;
using webapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormationController : ControllerBase
    {
        private readonly DataDbContext _dbContext;
        private IRepository<Formation> _formationRepository;

        public FormationController(DataDbContext dbContext, IRepository <Formation> formationRepository)
        {
            _dbContext = dbContext;
            _formationRepository = formationRepository;
        }

        [HttpGet("/formations")]
        public async Task <IActionResult> GetAllFormations()
        {
            List <Formation> formations;
            formations = (await _formationRepository.GetAll()).ToList();

            return Ok(formations);
        }

        [HttpPost("/formation")]
        public async Task<IActionResult> AddFormation([FromBody] Formation formation)
        {
            await _dbContext.Formations.AddAsync(formation);

            if (await _dbContext.SaveChangesAsync() >= 1)
                return Ok("Formation ajoutée au catalogue!");

            return BadRequest("Une erreur est survenue...");
        }

    }
}
