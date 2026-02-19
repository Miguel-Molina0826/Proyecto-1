let jugador1turno1 = 8
let jugador2turno1 = 7
let jugador1turno2 = 5
let jugador2turno2 = 6
let jugador1turno3 = 6
let jugador2turno3 = 9

let jugador1total = jugador1turno1 + jugador1turno2 + jugador1turno3
let jugador2total = jugador2turno1 + jugador2turno2 + jugador2turno3

let jugador1sequedaturno3 = jugador1total - jugador1turno3
let jugador2sequedaturno3 = jugador2total - jugador2turno3

if (jugador1turno1 + jugador1turno2 > 21) {
    console.log("Jugador 1 se paso de 21, gana el jugador 2")

} else if (jugador2turno1 + jugador2turno2 > 21) {
    console.log("Jugador 2 se paso de 21, gana el jugador 1")


} else if (jugador1turno3 > 21) {
    console.log("Jugador 1 se paso de 21, gana el jugador 2")
    } else if (jugador2turno3 > 21) {
    console.log("Jugador 2 se paso de 21, gana el jugador 1")

} else if (jugador1total == 21) {
    console.log("Jugador 1 gana con 21 puntos")
} else if (jugador2total == 21) {
    console.log("Jugador 2 gana con 21 puntos")

} else if (jugador1total > 21) {
    console.log("Jugador 1 se paso de 21, gana el jugador 2")

} else if (jugador2total > 21) {
    console.log("Jugador 2 se paso de 21, gana el jugador 1")

} else if (jugador1sequedaturno3 > 21) {
    console.log("Jugador 1 se paso de 21, gana el jugador 2")

} else if (jugador2sequedaturno3 > 21) {
    console.log("Jugador 2 se paso de 21, gana el jugador 1")

} else if (jugador1total > jugador2total) {
    console.log("Jugador 1 gana con " + jugador1total + " puntos")

} else if (jugador2total > jugador1total) {
    console.log("Jugador 2 gana con " + jugador2total + " puntos")

} else if (jugador1total == jugador2total) {
    console.log("Empate, ambos jugadores tienen " + jugador1total + " puntos")
}else if (jugador1sequedaturno3 == 21) {
    console.log("Jugador 1 gana con 21 puntos")

} else if (jugador2sequedaturno3 == 21) {
    console.log("Jugador 2 gana con 21 puntos")

} else if (jugador1sequedaturno3 > jugador2sequedaturno3) {
    console.log("Jugador 1 gana con " + jugador1sequedaturno3 + " puntos")

} else if (jugador2sequedaturno3 > jugador1sequedaturno3) {
    console.log("Jugador 2 gana con " + jugador2sequedaturno3 + " puntos")

} else if (jugador1sequedaturno3 == jugador2sequedaturno3) {
    console.log("Empate, ambos jugadores tienen " + jugador1sequedaturno3 + " puntos")
}




