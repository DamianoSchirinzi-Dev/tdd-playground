using System.Text.RegularExpressions;

namespace NUnit_Test_Project
{
    public class UnitTests
    {
        private PsuedoAccountCreation portal;
        private FizzBuzzGame game;
        private string username = "Zabumara";
        private string password = "TestPassword_2012";
   
        [SetUp]
        public void Setup()
        {
            portal = new PsuedoAccountCreation();
            game = new FizzBuzzGame();
        }

        [Test]
        public void TestFizzBuzz()
        {

            Assert.That(game.Play(1), Is.EqualTo("1"));
            Assert.That(game.Play(2), Is.EqualTo("2"));

            Assert.That(game.Play(3), Is.EqualTo("Fizz"));
            Assert.That(game.Play(6), Is.EqualTo("Fizz"));

            Assert.That(game.Play(10), Is.EqualTo("Buzz"));
            Assert.That(game.Play(20), Is.EqualTo("Buzz"));

            Assert.That(game.Play(15), Is.EqualTo("FizzBuzz"));
            Assert.That(game.Play(30), Is.EqualTo("FizzBuzz"));
        }

        [Test]
        public void CreateUser_ValidInput()
        {
            bool result = portal.CreateAccount(username, password);

            Assert.That(result, Is.EqualTo(true));         
        }

        [Test]
        public void CheckIfUserRegistered()
        {
            bool result = portal.isUserRegistered(username);

            Assert.That(result, Is.EqualTo(true));
        }
    }
}