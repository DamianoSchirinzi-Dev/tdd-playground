using CloudCustomers.API.Models;
using CloudCustomers.UnitTests.Helpers;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace CloudCustomers.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{    

    [HttpGet(Name = "GetUsers")]
    public async Task<IActionResult> GetAll()
    {
        var users = await UserFactory.GenerateUserList(); 
        if (users == null) return NotFound();

        return Ok(users);   
    }

    [HttpGet]
    public async Task<IActionResult> GetById(int id)
    {
        var users = UserFactory.GenerateUserList();
        var user = users.Result.Where(users => users.Id == id).FirstOrDefault();
        if (user == null) return NotFound("User not found by ID.");

        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> AddToDb(User _newUser)
    {
        var userList = await UserFactory.GenerateUserList();
        
        foreach (var user in userList)
        {
            if(user.Id == _newUser.Id)
            {
                return BadRequest("ID already exists");
            }
        }

        var users = await UserFactory.AddNewUserToDatabase(_newUser);

        return Ok(users);
    }
}
