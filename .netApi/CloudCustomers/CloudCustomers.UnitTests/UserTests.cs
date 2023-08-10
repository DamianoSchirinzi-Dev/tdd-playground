using CloudCustomers.API.Controllers;
using CloudCustomers.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CloudCustomers.UnitTests;

public class UserTests
{
    [Fact]
    public async void Get_ShouldReturn200StatusCode()
    {
        //Arrange
        var _sut = new UsersController();

        //Act
        var result = (OkObjectResult)await _sut.GetAll();

        //Assert
        Assert.NotNull(result);
        Assert.Equal((int)HttpStatusCode.OK, result.StatusCode);
    }

    [Fact]
    public async void Get_ShouldReturnListOfUsers()
    {
        var _sut = new UsersController();

        var result = (OkObjectResult)await _sut.GetAll();

        Assert.NotNull(result);        
        Assert.Equal(typeof(List<User>), result.Value.GetType());
    }

    [Fact]
    public async void Get_ShouldReturnListOfUsersContainingSpecifiedUser()
    {
        var _sut = new UsersController();

        var result = (OkObjectResult)await _sut.GetAll();
        var userList = result.Value as List<User>;

        Assert.NotNull(userList);
        var recordInQuestion = userList.Where(x => x.Id == 2 && x.Name == "Bob").SingleOrDefault();

        Assert.NotNull(recordInQuestion);
    }

    [Theory]
    [InlineData(1)]
    [InlineData(3)]
    [InlineData(5)]
    public async void Get_ShouldReturnSingleUserFromId(int _id)
    {
        var _sut = new UsersController();

        var listResult = (OkObjectResult)await _sut.GetAll();
        var userList = listResult.Value as List<User>;
        Assert.NotNull(userList);

        var userById = (OkObjectResult)await _sut.GetById(_id);
        var user = userById.Value as User;
        var matchedUser = userList.Where(x => x.Id == _id).SingleOrDefault();
        
        Assert.NotNull(matchedUser);
        Assert.Equal(user.Id, matchedUser.Id);
    }

    [Fact]
    public async void Get_ShouldReturn404OnIdNotFound()
    {
        var _sut = new UsersController();

        var _id = 20;    
        var userById = await _sut.GetById(_id);

        Assert.IsType<NotFoundObjectResult>(userById);
        Assert.Equal((int)HttpStatusCode.NotFound, (userById as NotFoundObjectResult).StatusCode);
    }

    [Fact]
    public async void Post_ShouldAddNewUserToDatabase()
    {
        var _sut = new UsersController();

        var newUser = new User { Id = 10, Name = "Alicia", Email = "test01021@hotmail.com", Password = "MyDog1234" };

        var updatedUserList = (OkObjectResult) await _sut.AddToDb(newUser);
        var users = updatedUserList.Value as List<User>;
        var matchedUser = users.Where(x => x.Id == newUser.Id).SingleOrDefault();

        Assert.NotNull(matchedUser);
        Assert.Equal(newUser.Id, matchedUser.Id);
    }

    [Fact]
    public async void Post_ShouldThrowErrorIfIdExistsInDb()
    {
        var _sut = new UsersController();

        var newUser = new User { Id = 2, Name = "Trevor", Email = "test021@hotmail.com", Password = "MyCat134" };

        var updatedUserList = await _sut.AddToDb(newUser);

        Assert.IsType<BadRequestObjectResult>(updatedUserList);
        Assert.Equal((int)HttpStatusCode.BadRequest, (updatedUserList as BadRequestObjectResult).StatusCode);
    }
}