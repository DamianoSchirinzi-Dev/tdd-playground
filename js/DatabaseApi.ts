export const fakeNames: string[] = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Sophia",
  "Jackson",
  "Ava",
  "Oliver",
  "Isabella",
  "Lucas",
  "Mia",
  "Aiden",
  "Luna",
  "Ethan",
  "Camila",
  "Mateo",
  "Arabella",
  "Sebastian",
  "Gianna",
  "James",
  "Charlotte",
  "Benjamin",
  "Amelia",
  "Leo",
  "Harper",
  "Henry",
  "Evelyn",
  "Alexander",
  "Abigail",
  "Jack",
  "Emily",
  "Daniel",
  "Ella",
  "Matthew",
  "Scarlett",
  "Samuel",
  "Grace",
  "Joseph",
  "Chloe",
  "David",
  "Victoria",
  "Carter",
  "Riley",
  "Wyatt",
  "Aria",
  "John",
  "Layla",
  "Owen",
  "Zoe",
  "Dylan",
  "Nora",
  "Luke",
  "Lily",
  "Gabriel",
  "Hannah",
  "Anthony",
  "Zoey",
  "Isaac",
  "Penelope",
  "Grayson",
  "Lillian",
  "Levi",
  "Addison",
  "Julian",
  "Aubrey",
  "Christopher",
  "Ellie",
  "Joshua",
  "Stella",
  "Andrew",
  "Natalie",
  "Lincoln",
  "Savannah",
  "Mateo",
  "Brooklyn",
  "Ryan",
  "Violet",
  "Nathan",
  "Elizabeth",
  "Aaron",
  "Lila",
  "Eli",
  "Grace",
  "Henry",
  "Nova",
  "Sebastian",
  "Aurora",
  "Nicholas",
  "Emilia",
];

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class DatabaseApi {

  populateDatabase(amount: number): number {
    shuffleArray(fakeNames);

    const dbInstance : string[] = fakeNames.slice(0,amount);

    return dbInstance.length;
  }

  removeNamesWithS(names: string[]): string[] {
    const namesWithoutS = names.filter((name) => !name.includes("S"));

    return namesWithoutS;
  }

  addNameToDb(name: string): string[] {
    let names = ["Damiano", "Grace", "Samantha"];
    names.push(name);

    return names;
  }
}

module.exports = DatabaseApi;
