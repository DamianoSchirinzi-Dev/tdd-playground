"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeNames = void 0;
exports.fakeNames = [
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
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
}
var DatabaseApi = /** @class */ (function () {
    function DatabaseApi() {
    }
    DatabaseApi.prototype.populateDatabase = function (amount) {
        shuffleArray(exports.fakeNames);
        var dbInstance = exports.fakeNames.slice(0, amount);
        return dbInstance.length;
    };
    DatabaseApi.prototype.removeNamesWithS = function (names) {
        var namesWithoutS = names.filter(function (name) { return !name.includes("S"); });
        return namesWithoutS;
    };
    DatabaseApi.prototype.addNameToDb = function (name) {
        var names = ["Damiano", "Grace", "Samantha"];
        return names;
    };
    return DatabaseApi;
}());
module.exports = DatabaseApi;
