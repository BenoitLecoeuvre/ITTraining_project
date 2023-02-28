using Microsoft.EntityFrameworkCore;
using webapi.Models;
using webapi.Tools;

namespace webapi.Repositories
{
    public class FormationRepository : IRepository<Formation>
    {
        private readonly DataDbContext _dbContext;

        public FormationRepository(DataDbContext dbcontext)
        {
            _dbContext = dbcontext;
        }
        public async Task<bool> Add(Formation entity)
        {
            var addedFormation = _dbContext.Formations.Add(entity);
            await _dbContext.SaveChangesAsync();
            return addedFormation.Entity.Id > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var formation = await GetById(id);
            if (formation == null)
                return false;
            _dbContext.Formations.Remove(formation);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Formation>> GetAll()
        {
            return await _dbContext.Formations.Include(f => f.Formateur).ToListAsync();
        }

        public async Task<Formation?> GetById(int id)
        {
            return await _dbContext.Formations.FindAsync(id);
        }

        public async Task<bool> Update(Formation entity)
        {
            var formationfromDB = await _dbContext.Formations.FindAsync(entity.Id);

            if (formationfromDB == null) return false;

            if (formationfromDB.Name != entity.Name)
                formationfromDB.Name = entity.Name;
            if (formationfromDB.Category != entity.Category)
                formationfromDB.Category = entity.Category;
            if (formationfromDB.SubCategory != entity.SubCategory)
                formationfromDB.SubCategory = entity.SubCategory;
            if (formationfromDB.Description != entity.Description)
                formationfromDB.Description = entity.Description;
            if (formationfromDB.DescriptionDetail != entity.DescriptionDetail)
                formationfromDB.DescriptionDetail = entity.DescriptionDetail;
            if (formationfromDB.Duree != entity.Duree)
                formationfromDB.Duree = entity.Duree;
            if (formationfromDB.Price != entity.Price)
                formationfromDB.Price = entity.Price;
            if (formationfromDB.Difficulty != entity.Difficulty)
                formationfromDB.Difficulty = entity.Difficulty;
            if (formationfromDB.Lieu != entity.Lieu)
                formationfromDB.Lieu = entity.Lieu;
            if (formationfromDB.StartDate != entity.StartDate)
                formationfromDB.StartDate = entity.StartDate;
            if (formationfromDB.Logo != entity.Logo)
                formationfromDB.Logo = entity.Logo;
            if (formationfromDB.Formateur != entity.Formateur)
                formationfromDB.Formateur = entity.Formateur;

            if (await _dbContext.SaveChangesAsync() == 0) return false;

            return true;
        }
    }
}
