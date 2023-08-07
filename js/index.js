var DbApi = require('./DatabaseApi');
var DbApiInstance = new DbApi();
var names = ["Damiano", "Grace", "Samantha"];
console.log(DbApiInstance.removeNamesWithS(names));
