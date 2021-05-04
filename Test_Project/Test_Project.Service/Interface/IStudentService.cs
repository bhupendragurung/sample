using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test_Project.Data.Models;

namespace Test_Project.Service.Interface
{
    public interface IStudentService
    {
        Task<bool> Add(Student student);
        Task<bool> Update(Student student);
        Task<bool> Delete(int id);
        Task<IList<Student>> GetStudent();
        Task<Student> GetStudentById(int id);
    }
}
