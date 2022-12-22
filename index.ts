let n:number = 10
const s:string = 'Lorem' 
const tf:boolean = true
const nul:null = null
let undef: undefined | null | number

let st:"lorem" | "Ipsum" | "Ammet" = "lorem"
const arr:(number | string)[] = [1, 2 , 3, 4, 'Lorem']
const tp:[string, number, string] = ['Lorem', 1, 'Ipsum']
enum venum{
    q, w, i = 'i'
}
console.log(venum)
let a:any
function func(c:number, b:string): string{
return c + b
}
console.log(func(1, 'lorem'))

interface Human {
    height: number
    weight: number
    hairColor?: string
}

interface Person extends Human{
    name: string
    surname: string
    country: string
    numberoOfChlidren: number
    age: number
    nationality: string
    children: Children[]
}

interface Children extends Human{
    name: string
    dateOfBirth: number
}

const cherchil:Person = {
    hairColor: "bold",
    height: 167,
    weight: 62,
    age: 148,
    nationality: "british",
    name: "Winston",
    surname: "Churchill",
    country: "United Kingdom",
    numberoOfChlidren: 5,
    children:[{
        name: "Diana",
        dateOfBirth: 1909,
        hairColor: "black",
        height: 167,
        weight: 62,
    },
    {
       name: "Sarah",
        dateOfBirth: 1874,
        height: 167,
        weight: 62
    }]
}

interface car{
    model: string
    weight: number
    yearOfRelease: number 
}

interface panel extends car{
    type: string
    color: string
    doorType: door[]
    wheel: wheel[]
    transmission: transmission[]
}

interface door extends car{
    doorColor: string
}

interface wheel extends car{
    radius: number
    brand: string
}

interface transmission extends car{
    country: string
    name: string
}

const tesla:panel = {
    model: "x",
    weight: 1300,
    yearOfRelease: 2022 ,
    type: "Tesla-Original",
    color: "black",
    doorType:[{
        model: "x",
        weight: 75,
        yearOfRelease: 2022,
        doorColor: "yellow"
    }],
    wheel:[{
        model: "x",
        weight: 75,
        yearOfRelease: 2022,
        radius: 22,
        brand: "Tesla"
    }],
    transmission:[{
        model: "x",
        weight: 75,
        yearOfRelease: 2022,
        country:"USA",
        name:"Automatic Tesla Turbo Giper Super Transmission with one hair from Ilon's Mask head on top"
    }]
}