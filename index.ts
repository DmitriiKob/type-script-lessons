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

interface Car{
    model: string
    weight: number
    yearOfRelease: number
    doors: door[]
    wheel: wheel[]
    panel: panel
    transmission: transmission
}

interface Crossover extends Car{
    CVType: 'off-highway vehicles' | 'light trucks' | 'pick up'
}

interface panel{
    type: string
    color: string
}

interface door {
    doorColor: string
}

interface wheel {
    radius: number
    brand: string
}

interface transmission {
    country: string
    name: string
}

const tesla:Crossover = {
    model: "x",
    weight: 1300,
    yearOfRelease: 2022 ,
    CVType: 'pick up',
    panel: {
        type: "r2d2",
        color: 'brown'
    },
    doors:[{
        doorColor: "yellow"
    }],
    wheel:[{
        radius: 22,
        brand: "Tesla"
    }],
    transmission:{
        country:"USA",
        name:"Automatic Tesla Turbo Giper Super Transmission with one hair from Ilon's Mask head on top"
    }
}


// export const min = (list: number[]): number => {
//     return Math.min.apply( Math, list );
// };

// export const max = (list: number[]): number => {
//     return Math.max.apply( Math, list );
// };

// export function sumMix(x: any[]): number {
//     return x.reduce((a, b) => a + Number(b), 0)
//   }
// function setTwiceOld(sonAge, FatherAge): number{
//     for(let i = 1; i <= sonAge; i++){
//         if((FatherAge + i) / (sonAge + i) === 2){
//             return i
//         }
//     }
// }

 interface CssButton {
   [property:string] :string
 }
 
 const cssButton: CssButton = {
    width: '150px',
    color: 'white'
 }

 function getSelectors (property:string, value:string): string
 function getSelectors (): void
 function getSelectors (property?: string, value?: string){
    if(property && value){
        return cssButton[property]
    }
 }

 console.log(getSelectors())