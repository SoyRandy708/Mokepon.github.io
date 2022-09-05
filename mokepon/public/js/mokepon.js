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

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
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
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 600

if(anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = []
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width -this.ancho)
        this.y = aleatorio(0, mapa.height -this.alto)
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
            this.alto
        )
    }
}

let hipodoge = new Mokepon("Hipodoge", "./Assets/hipodoge.webp", 5, "./Assets/cabezaHipodoge.webp")
let capipepo = new Mokepon("Capipepo", "./Assets/capipepo.webp", 5, "./Assets/cabezaCapipepo.webp")
let ratigueya = new Mokepon("Ratigueya", "./Assets/ratigueya.png", 5, "./Assets/cabezaRatigueya.png")
let pydos = new Mokepon("Pydos", "./Assets/pydos.png", 5, "./Assets/pydos.png")
let langostelvis = new Mokepon("Langostelvis", "./Assets/langostelvis.webp", 5, "./Assets/langostelvis.webp")
let tucapalma = new Mokepon("Tucapalma", "./Assets/tucapalma.png", 5, "./Assets/tucapalma.png")

const HIPODOGE_ATAQUES = [
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
hipodoge.tipo.push(
    {nombre: "Agua"},
)
const CAPIPEPO_ATAQUES = [
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},    
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
capipepo.tipo.push(
    {nombre: "Tierra"},
)
const RATIGUEYA_ATAQUES = [
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},  
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
ratigueya.tipo.push(
    {nombre: "Fuego"},
)
const PYDOS_ATAQUES = [
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
]
pydos.ataques.push(...PYDOS_ATAQUES)
pydos.tipo.push(
    {nombre: "Tierra"},
    {nombre: "Fuego"},
)
const LANGOSTELVIS_ATAQUES = [
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "FUEGO 🔥", id:"boton-fuego"},
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "AGUA 💧", id:"boton-agua"},
]
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)
langostelvis.tipo.push(
    {nombre: "Fuego"},
    {nombre: "Agua"},
)
const TUCAPALMA_ATAQUES = [ 
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "AGUA 💧", id:"boton-agua"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
    {nombre: "TIERRA 🌱", id:"boton-tierra"},
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)
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

    unirseAlJuego()
}
function unirseAlJuego() {
    fetch("http://192.168.1.71:8080/unirse")
        .then(function (res) {
            if(res.ok) {
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }  
        })
}
function seleccionarMascotaJugador() {


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
        return
    }     
    
    sectionSeleccionarMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    iniciarMapa()
    tipoAtaque()
}
function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.1.71:8080/mokepon/${jugadorId}`, { 
        method: "post",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            mokepon: mascotaJugador
        })
    })
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
            if(ataqueJugador.length === 5) {
                enviarAtaques()
            }

        })
    })
}
function enviarAtaques() {
    fetch(`http://192.168.1.71:8080/mokepon/${jugadorId}/ataques`, {
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}
function obtenerAtaques() {
    fetch(`http://192.168.1.71:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) { 
            if(res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) { 
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}
function seleccionarMascotaEnemigo(enemigo) {
    /*let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()*/
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
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
clearInterval(intervalo)

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

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}
function enviarPosicion(x, y) {
    fetch(`http://192.168.1.71:8080/mokepon/${jugadorId}/posicion`, { 
        method: "post", 
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            x, 
            y
        })
    })
    .then(function (res) { 
        if(res.ok) {
            res.json()
                .then(function ({enemigos}) {
                    mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon("Hipodoge", "./Assets/hipodoge.webp", 5, "./Assets/cabezaHipodoge.webp", enemigo.id)
                        } else if (mokeponNombre === "Capipepo") {
                            mokeponEnemigo = new Mokepon("Capipepo", "./Assets/capipepo.webp", 5, "./Assets/cabezaCapipepo.webp", enemigo.id)
                        } else if (mokeponNombre === "Ratigueya") {
                            mokeponEnemigo = new Mokepon("Ratigueya", "./Assets/ratigueya.png", 5, "./Assets/cabezaRatigueya.png", enemigo.id)
                        } else if (mokeponNombre === "Pydos") {
                            mokeponEnemigo = new Mokepon("Pydos", "./Assets/pydos.png", 5, "./Assets/pydos.png", enemigo.id)
                        } else if (mokeponNombre === "Langostelvis") {
                            mokeponEnemigo = new Mokepon("Langostelvis", "./Assets/langostelvis.webp", 5, "./Assets/langostelvis.webp", enemigo.id)
                        } else if (mokeponNombre === "Tucapalma") {
                            mokeponEnemigo = new Mokepon("Tucapalma", "./Assets/tucapalma.png", 5, "./Assets/tucapalma.png", enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        return mokeponEnemigo
                    })    
                })
        }
    })
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
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    console.log("Hay colision " + enemigo.nombre)
    enemigoId = enemigo.id
}
window.addEventListener("load", iniciarJuego)