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
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./Assets/mokemap.png"
let mascotaJugadorObjeto

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = aleatorio(0, 640 - 50), y = aleatorio(0, 480 - 50)) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = []
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 50
        this.alto = 50
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage( 
            this.mapaFoto, 
            this.x, 
            this.y, 
            this.ancho, 
            this.alto)
    }
}

let hipodoge = new Mokepon("Hipodoge", "./Assets/hipodoge.webp", 5, "./Assets/cabezaHipodoge.webp")
let hipodogeEnemigo = new Mokepon("Hipodoge", "./Assets/hipodoge.webp", 5, "./Assets/cabezaHipodoge.webp")
let capipepo = new Mokepon("Capipepo", "./Assets/capipepo.webp", 5, "./Assets/cabezaCapipepo.webp")
let capipepoEnemigo = new Mokepon("Capipepo", "./Assets/capipepo.webp", 5, "./Assets/cabezaCapipepo.webp")
let ratigueya = new Mokepon("Ratigueya", "./Assets/ratigueya.png", 5, "./Assets/cabezaRatigueya.png")
let ratigueyaEnemigo = new Mokepon("Ratigueya", "./Assets/ratigueya.png", 5, "./Assets/cabezaRatigueya.png")
let pydos = new Mokepon("Pydos", "./Assets/pydos.png", 5, "./Assets/pydos.png")
let pydosEnemigo = new Mokepon("Pydos", "./Assets/pydos.png", 5, "./Assets/pydos.png")
let langostelvis = new Mokepon("Langostelvis", "./Assets/langostelvis.webp", 5, "./Assets/langostelvis.webp")
let langostelvisEnemigo = new Mokepon("Langostelvis", "./Assets/langostelvis.webp", 5, "./Assets/langostelvis.webp")
let tucapalma = new Mokepon("Tucapalma", "./Assets/tucapalma.png", 5, "./Assets/tucapalma.png")
let tucapalmaEnemigo = new Mokepon("Tucapalma", "./Assets/tucapalma.png", 5, "./Assets/tucapalma.png")

hipodoge.ataques.push(
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
hipodoge.tipo.push(
    {nombre: "Agua"},
)
capipepo.ataques.push(
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},    
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
)
capipepo.tipo.push(
    {nombre: "Tierra"},
)
ratigueya.ataques.push(
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},  
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
ratigueya.tipo.push(
    {nombre: "Fuego"},
)
pydos.ataques.push(
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
)
pydos.tipo.push(
    {nombre: "Tierra"},
    {nombre: "Fuego"},
)
langostelvis.ataques.push(
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "AGUA 💧", id:"boton-agua"},
)
langostelvis.tipo.push(
    {nombre: "Fuego"},
    {nombre: "Agua"},
)
tucapalma.ataques.push(
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
)
tucapalma.tipo.push(
    {nombre: "Agua"},
    {nombre: "Tierra"},
)
mokepones.push(hipodoge, capipepo, ratigueya, pydos, langostelvis, tucapalma)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

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
    sectionVerMapa.style.display = "flex"
    // sectionSeleccionarAtaque.style.display = "flex"

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
    iniciarMapa()
    tipoAtaque()
    seleccionarMascotaEnemigo()
}
function tipoAtaque() {
    if(mascotaJugador ){
        //FALTA PONER EL BUFO SI ES QUE LA MASCOTA TIENE 2 O MAS TIPOS
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
            if(e.target.textContent === "FUEGO 🔥") {
                ataqueJugador.push("FUEGO 🔥")
                console.log(ataqueJugador)
                boton.style.background = "#0096FF"
                boton.disabled = true
            } else if(e.target.textContent === "AGUA 💧") {
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
    
    ataqueEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre)
    ataquesMokeponEnemigo.splice(ataqueAleatorio, 1)

    console.log(ataqueEnemigo)
    console.log(ataquesMokeponEnemigo)
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
function iniciarMapa() {
    mapa.width = 640
    mapa.height = 480
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", teclaPresionada)
    window.addEventListener("keyup", detenerMovimiento)
}
function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height)
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX != 0 || mascotaJugadorObjeto.velocidadY != 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}
function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function teclaPresionada(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}
function obtenerObjetoMascota() {
    for(let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}
function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo  
    ) {
        return
    }
    detenerMovimiento()
    console.log("Hay colision " + enemigo.nombre)
}
window.addEventListener("load", iniciarJuego)