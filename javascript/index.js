function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let resultadoComida
let comidas = ["Macarrones con atún y cebolla", "Tortilla de patatas", 
"Fiambre y huevos", "Puchero", "Fabada", "Cocido madrileño", "Filete y arroz", "Pizza",
"Bocadillo de salchichas", "Pechuga empanada", "Salmorejo y postre", "Ensalada y postre"]

let comida = document.getElementById("comida")
let resultado = document.getElementById("cajaResultado")

comida.addEventListener("click", () => {
    // console.log(comidas[getRandomInt(comidas.length)]);
    resultadoComida = comidas[getRandomInt(comidas.length)]
    resultado.innerHTML = "Hoy vas a comer " + resultadoComida
})


