let caracteresVarios = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "@", "¡", "!", "¿", "?", "/", "=", "$", "#", ">", "<", "&",]

let random = 0
let contraseñaNueva = []
let nuevaContraseña 


function botonGenerar() {

    contraseñaNueva  = []
    let numeroElegido = document.getElementById("caja__texto").value

    for (let i = 0; i < numeroElegido; i++){
        random = parseInt(Math.floor(Math.random()* caracteresVarios.length))
        contraseñaNueva.push(caracteresVarios[random])
    }
    nuevaContraseña = contraseñaNueva.join("")
    document.getElementById("caja__texto").value = ""
    let contraseña = document.getElementById("respuesta")
    contraseña.innerHTML = `Tu contraseña generada es: ${nuevaContraseña}`
}



