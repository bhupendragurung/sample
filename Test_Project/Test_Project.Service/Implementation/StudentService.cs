using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test_Project.Data.Data;
using Test_Project.Data.Models;
using Test_Project.Service.Interface;

namespace Test_Project.Service.Implementation
{
    public class StudentService : IStudentService
    {
        private readonly DataContext _dataContext;

        public StudentService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<bool> Add(Student student)
        {
            
            _dataContext.Students.Add(student);
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Delete(int id)
        {
            Student std = await _dataContext.Students.FirstOrDefaultAsync(x => x.Id == id);
            _dataContext.Students.Remove(std);
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<IList<Student>> GetStudent()
        {
            return await _dataContext.Students.ToListAsync();
        }
        public async Task<Student> GetStudentById(int id)
        {
            return await _dataContext.Students.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> Update(Student student)
        {
            _dataContext.Students.Add(student);
            _dataContext.Entry(student).State = EntityState.Modified;
            await _dataContext.SaveChangesAsync();
            return true;
        }
    }
}
