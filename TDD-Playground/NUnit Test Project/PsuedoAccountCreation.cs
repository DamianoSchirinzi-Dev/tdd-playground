using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace NUnit_Test_Project
{
    public class PsuedoAccountCreation
    {
        private Dictionary<string, string> users = new Dictionary<string, string>();

        public bool CreateAccount(string username, string password)
        {
            if (users.ContainsKey(username))
                return false;

            if(ContainsNumber(password) && ContainsUppercase(password))
            {
                users[username] = password;
                return true;
            }

            return false;
        }

        public bool isUserRegistered(string username) {
            CreateAccount(username, "TestPassword_2012");

            if (users.ContainsKey(username)) 
                return true;   
            else
                return false;
        }

        public bool ContainsNumber(string input)
        {
            return Regex.IsMatch(input, @"\d");
        }

        public bool ContainsUppercase(string input)
        {
            return Regex.IsMatch(input, @"[A-Z]");
        }
        public bool ContainsSpecialCharacter(string input)
        {
            return Regex.IsMatch(input, @"[^\w\s]");
        }
    }
}
