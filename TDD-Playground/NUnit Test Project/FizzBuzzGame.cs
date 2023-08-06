using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnit_Test_Project
{
    public class FizzBuzzGame
    {
        public string Play(int num)
        {
            if(num % 3 == 0 && num % 5 == 0)
             return "FizzBuzz";


            if(num % 3 == 0)            
                return "Fizz";            
            else if(num % 5 == 0)            
                return "Buzz";
            

            return num.ToString();
        }
    }
}
