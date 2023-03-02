using webapi.Models;
using webapi.Tools;

namespace webapi.Repositories
{
    public class TodoRepository : IRepository<Todo>
    {
        public Task<bool> Add(Todo entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Todo>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Todo?> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(Todo entity)
        {
            throw new NotImplementedException();
        }
    }
}
