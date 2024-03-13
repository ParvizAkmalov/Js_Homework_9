let a = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vel ab sed nesciunt itaque tenetur, beatae aliquam, earum nisi voluptatum ea. Labore nihil delectus deleniti iure, incidunt ratione ipsa a!"

let r = a.split('')

r.find((item) => {})

let s = []
let sa = []
let sal = []
let salo = []
let salom = []

let opshi = []

for (let i = 0; i < r.length; i++){
    if (r[i].toLocaleLowerCase() === "s"){
        s.push(r[i])
    }
    if (r[i].toLocaleLowerCase() === "a"){
        sa.push(r[i])
    }
    if (r[i].toLocaleLowerCase() === "l"){
        sal.push(r[i])
    }
    if (r[i].toLocaleLowerCase() === "o"){
        salo.push(r[i])
    }
    if (r[i].toLocaleLowerCase() === "m"){
        salom.push(r[i])
    }
}

console.log(s);
console.log(sa);
console.log(sal);
console.log(salo);
console.log(salom);

let bb = Math.min(s.length, sa.length, sal.length, salo.length, salom.length)
alert(`Loremdan ${bb} ta salom so'zini yasasa bo'ladi!`)