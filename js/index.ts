const DbApi = require('./DatabaseApi');
const DbApiInstance = new DbApi();

let names = ["Damiano", "Grace", "Samantha"];

console.log(DbApiInstance.removeNamesWithS(names));
