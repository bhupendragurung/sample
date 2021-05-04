using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test_Project.Data.Models;
using Test_Project.Service.Interface;

namespace Test_Project.Api.Controllers
{
    
    public class StudentsController : BaseApiController
    {

        private readonly IStudentService _studentService;

        public StudentsController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpPost]
        [Route("UpdateStudent")]
        public async Task<ActionResult> UpdateStudent(Student student)
        {
            await _studentService.Update(student);
            return Ok();

        }
        [HttpGet]
        [Route("GetStudent")]
        public async Task<ActionResult<IList<Student>>> GetStudent()
        {
        var result=   await _studentService.GetStudent();
            return Ok(result);


        }

        [HttpGet]
        [Route("GetStudentById/{id}")]
        public async Task<ActionResult<Student>> GetStudentById(int id)
        {
          var result=  await _studentService.GetStudentById(id);
       
            return Ok(result);

        }

        [HttpPost]
        [Route("DeleteStudent/{id}")]
        public async Task<ActionResult> DeleteStudent(int  id)
        {
            await _studentService.Delete(id);
            return Ok();

        }

        [HttpPost]
        [Route("InsertStudent")]
        public async Task<ActionResult> InsertStudent(Student student)
        {
            await _studentService.Add(student);
            return Ok();

        }
    }
}
