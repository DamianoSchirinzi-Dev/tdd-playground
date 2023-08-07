const DbApi = require("./DatabaseApi");
const DbApiInstance = new DbApi();

test('populate database with 10 random names', () => { 
    expect(DbApiInstance.populateDatabase(10)).toBe(10)
})

test('populate database with 20 random names', () => { 
    expect(DbApiInstance.populateDatabase(20)).toBe(20)
})

test('populate database with 33 random names', () => { 
    expect(DbApiInstance.populateDatabase(33)).toBe(33)
})

test('add name to database', () => {
    expect(DbApiInstance.addNameToDb("Stephen")).toContain("Stephen");
})



