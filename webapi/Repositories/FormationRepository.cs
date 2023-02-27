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

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Formation>> GetAll()
        {
            return await _dbContext.Formations.Include(f => f.Formateur).ToListAsync();
        }

        public Task<Formation?> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(Formation entity)
        {
            throw new NotImplementedException();
        }
    }
}
