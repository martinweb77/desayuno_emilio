function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let resultadoProducto
let resultadoPan
let panes = ["Bollo", "Viena", "Pipas", "Mollete"]
let productos = ["Mantequilla y mermelada", "Salchichón", "Tortilla", "Jamón y tomate", "York", "Carne mechada"]

let pan = document.getElementById("pan")
let producto = document.getElementById("producto")
let resultado = document.getElementById("cajaResultado")

pan.addEventListener("click", () => {
    // console.log(panes[getRandomInt(panes.length)]);
    resultadoPan = panes[getRandomInt(panes.length)]
    resultado.innerHTML = "Hoy vas a desayunar " + resultadoPan

})

producto.addEventListener("click", () => {
    // console.log(productos[getRandomInt(productos.length)]);
    resultadoProducto = productos[getRandomInt(productos.length)]
    if (!resultadoPan) {
        resultado.innerHTML = "Seleciona primero el tipo de pan"
    } else {
        resultado.innerHTML = "Hoy vas a desayunar " + resultadoPan + " con " + resultadoProducto
    }
})


