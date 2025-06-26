// for (let i=0; i<50; i++){
//     console.log("Bonjour");
// }

// function hello(name){
//     console.log("Hello", name);
// }

// let nom = "wil"
// hello(nom);

// function triple (n){
//     let d= 3*n;
//     return d;
// }

// console.log(triple(27));

// let a = 8;
// while (a<10){
//     console.log("bonjour");
// }

const container = document.getElementById('container');

function getRandomColor () {
    const letters = "0123456789ABCDEF";
    let color ='#';
    for (let i= 0; i<6; i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

setInterval(() => {
    const p = document.createElement('p');
    p.textContent = "Bonjour connard";
    p.style.color = getRandomColor();
    container.appendChild(p);
}, 10);
