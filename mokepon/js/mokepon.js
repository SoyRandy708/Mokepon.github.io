const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemiga")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya 
let inputPydos 
let inputLangostelvis
let inputTucapalma
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = []
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./Assets/mokepons_mokepon_hipodoge_attack.webp", 5)
let capipepo = new Mokepon("Capipepo", "./Assets/mokepons_mokepon_capipepo_attack.webp", 5)
let ratigueya = new Mokepon("Ratigueya", "./Assets/mokepons_mokepon_ratigueya_attack.png", 5)
let pydos = new Mokepon("Pydos", "./Assets/mokepons_mokepon_pydos_attack.png", 5)
let langostelvis = new Mokepon("Langostelvis", "./Assets/mokepons_mokepon_langostelvis_attack.webp", 5)
let tucapalma = new Mokepon("Tucapalma", "./Assets/mokepons_mokepon_tucapalma_attack.png", 5)

hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)
hipodoge.tipo.push(
    {nombre: "Agua"},
)
capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},    
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)
capipepo.tipo.push(
    {nombre: "Tierra"},
)
ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},  
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)
ratigueya.tipo.push(
    {nombre: "Fuego"},
)
pydos.ataques.push(
    {nombre: "🌱", id:"boton-tierra"},
    {nombre: "🌱", id:"boton-tierra"},
    {nombre: "🔥", id:"boton-fuego"},
    {nombre: "🔥", id:"boton-fuego"},
    {nombre: "🔥", id:"boton-fuego"},
)
pydos.tipo.push(
    {nombre: "Tierra"},
    {nombre: "Fuego"},
)
langostelvis.ataques.push(
    {nombre: "🔥", id:"boton-fuego"},
    {nombre: "🔥", id:"boton-fuego"},
    {nombre: "🔥", id:"boton-fuego"},
    {nombre: "💧", id:"boton-agua"},
    {nombre: "💧", id:"boton-agua"},
)
langostelvis.tipo.push(
    {nombre: "Fuego"},
    {nombre: "Agua"},
)
tucapalma.ataques.push(
    {nombre: "💧", id:"boton-agua"},
    {nombre: "💧", id:"boton-agua"},
    {nombre: "🌱", id:"boton-tierra"},
    {nombre: "🌱", id:"boton-tierra"},
    {nombre: "🌱", id:"boton-tierra"},
)
tucapalma.tipo.push(
    {nombre: "Agua"},
    {nombre: "Tierra"},
)
mokepones.push(hipodoge, capipepo, ratigueya, pydos, langostelvis, tucapalma)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputPydos = document.getElementById("Pydos")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else {
        alert("Selecciona una mascota")
    } 

    extraerAtaques(mascotaJugador)
    tipoAtaque()
    seleccionarMascotaEnemigo()
}
function tipoAtaque() {
    if(mokepones){

    }
}
function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO 🔥")
                console.log(ataqueJugador)
                boton.style.background = "#0096FF"
                boton.disabled = true
            } else if(e.target.textContent === "💧") {
                ataqueJugador.push("AGUA 💧")
                console.log(ataqueJugador)
                boton.style.background = "#0096FF"
                boton.disabled = true
            } else {
                ataqueJugador.push("TIERRA 🌱")
                console.log(ataqueJugador)
                boton.style.background = "#0096FF"   
                boton.disabled = true            
            }

            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO 🔥")
    } else if(ataqueAleatorio == 2 || ataqueAleatorio == 3) {
        ataqueEnemigo.push("AGUA 💧")
    } else {
        ataqueEnemigo.push("TIERRA 🌱")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea() {
    if(ataqueJugador.length === 5) {
        combate()
    }
}
function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() {
for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]) {
        indexAmbosOponentes(index, index)
        crearMensaje("EMPATE")
    } else if(ataqueJugador[index] === "TIERRA 🌱" && ataqueEnemigo[index] === "AGUA 💧" || ataqueJugador[index] === "AGUA 💧" && ataqueEnemigo[index] === "FUEGO 🔥" || ataqueJugador[index] === "FUEGO 🔥" && ataqueEnemigo[index] === "TIERRA 🌱") {
        indexAmbosOponentes(index, index)
        crearMensaje("GANASTE")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    } else {
        indexAmbosOponentes(index, index)
        crearMensaje("PERDISTE")
        victoriasEnemigo++
        spanVidasEnemigo.innerHTML = victoriasEnemigo
    } 
}
    revisarVidas()
}
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function revisarVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("ESTO FUE UN EMPATE")
    } else if(victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICIDADES, GANASTE!")
    } else {
        crearMensajeFinal("LO SIENTO, HAS PERDIDO")
    }
}
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function reiniciarJuego() {
    location.reload()
}
window.addEventListener("load", iniciarJuego)