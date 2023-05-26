function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let resultadoProducto
let resultadoPan
let panes = ["Bollo", "Viena", "Pipas", "Mollete"]
let productos = ["Mantequilla", "Pate", "Sobrasada", "Tomate Triturado", 'Mantequilla y Pavo', "Mantequilla y York", "Jamon Serrano", "Tomate rodajas y Jamon Serrano"]

let pan = document.getElementById("pan")
let producto = document.getElementById("producto")
let resultado = document.getElementById("cajaResultado")

pan.addEventListener("click", () => {
    // console.log(panes[getRandomInt(panes.length - 1)]);
    resultadoPan = panes[getRandomInt(panes.length - 1)]
    resultado.innerHTML = "Hoy vas a desayunar "+resultadoPan

})

producto.addEventListener("click", () => {
    // console.log(productos[getRandomInt(productos.length - 1)]);
    resultadoProducto = productos[getRandomInt(productos.length - 1)]
    resultado.innerHTML = "Hoy vas a desayunar "+resultadoPan + " con "+ resultadoProducto
})


