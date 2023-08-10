using CloudCustomers.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloudCustomers.UnitTests.Helpers
{
    public static class UserFactory
    {
        public static async Task<List<User>> GenerateUserList() {

            List<User> userList = new List<User>()
            {
                new User { Id = 1, Name="Alice", Email="alice@example.com", Password="a1b2c3d4" },
                new User { Id = 2, Name="Bob", Email="bob@example.com", Password="x7y8z9" },
                new User { Id = 3, Name="Charlie", Email="charlie@example.com", Password="p@ssw0rd" },
                new User { Id = 4, Name="David", Email="david@example.com", Password="secure123" },
                new User { Id = 5, Name="Eve", Email="eve@example.com", Password="letmein" }
            };

            return userList;        
        }

        public static async Task<List<User>> AddNewUserToDatabase(User _newUser)
        {
            List<User> userList = await GenerateUserList();

            userList.Add(_newUser);

            return userList;
        }
    }
}
