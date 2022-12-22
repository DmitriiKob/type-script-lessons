var n = 10;
var s = 'Lorem';
var tf = true;
var nul = null;
var undef;
var st = "lorem";
var arr = [1, 2, 3, 4, 'Lorem'];
var tp = ['Lorem', 1, 'Ipsum'];
var venum;
(function (venum) {
    venum[venum["q"] = 0] = "q";
    venum[venum["w"] = 1] = "w";
    venum["i"] = "i";
})(venum || (venum = {}));
console.log(venum);
var a;
function func(c, b) {
    return c + b;
}
console.log(func(1, 'lorem'));

var cherchil = {
    hairColor: "bold",
    height: 167,
    weight: 62,
    age: 148,
    nationality: "british",
    name: "Winston",
    surname: "Churchill",
    country: "United Kingdom",
    numberoOfChlidren: 5,
    children: [{
            name: "Diana",
            dateOfBirth: 1909,
            hairColor: "black",
            height: 167,
            weight: 62
        },
        {
            name: "Sarah",
            dateOfBirth: 1874,
            height: 167,
            weight: 62
        }]
};
var tesla = {
    model: "x",
    weight: 1300,
    yearOfRelease: 2022,
    type: "Tesla-Original",
    color: "black",
    doorType: [{
            model: "x",
            weight: 75,
            yearOfRelease: 2022,
            doorColor: "yellow"
        }],
    wheel: [{
            model: "x",
            weight: 75,
            yearOfRelease: 2022,
            radius: 22,
            brand: "Tesla"
        }],
    transmission: [{
            model: "x",
            weight: 75,
            yearOfRelease: 2022,
            country: "USA",
            name: "Automatic Tesla Turbo Giper Super Transmission with one hair from Ilon's Mask head on top"
        }]
};
