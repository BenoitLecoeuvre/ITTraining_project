using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using webapi.Models;
using webapi.Tools;


namespace webapi.Repositories
{
    public class FormateurRepository : IRepository<Formateur>
    {
        private readonly DataDbContext _dbContext;

        public FormateurRepository(DataDbContext dbcontext)
        {
            _dbContext = dbcontext;
        }
        public async Task<bool> Add(Formateur entity)
        {
            var addedFormateur = _dbContext.Formateurs.Add(entity);
            await _dbContext.SaveChangesAsync();
            return addedFormateur.Entity.Id > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var formateur = await GetById(id);
            if (formateur == null)
                return false;
            _dbContext.Formateurs.Remove(formateur);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Formateur>> GetAll()
        {
            return await _dbContext.Formateurs.ToListAsync();
        }

        public async Task<Formateur?> GetById(int id)
        {
            return await _dbContext.Formateurs.FindAsync(id);
        }

        public async Task<bool> Update(Formateur entity)
        {
            var formateurfromDB = await _dbContext.Formateurs.FindAsync(entity.Id);

            if (formateurfromDB == null) return false;

            if (formateurfromDB.Nom != entity.Nom)
                formateurfromDB.Nom = entity.Nom;
            if (formateurfromDB.Prenom != entity.Prenom)
                formateurfromDB.Prenom = entity.Prenom;
            if (formateurfromDB.Anciennete != entity.Anciennete)
                formateurfromDB.Anciennete = entity.Anciennete;
            if (formateurfromDB.Email != entity.Email)
                formateurfromDB.Email = entity.Email;
            if (formateurfromDB.Phone != entity.Phone)
                formateurfromDB.Phone = entity.Phone;
            if (formateurfromDB.Status != entity.Status)
                formateurfromDB.Status = entity.Status;


            if (await _dbContext.SaveChangesAsync() == 0) return false;

            return true;
        }
    }
}

