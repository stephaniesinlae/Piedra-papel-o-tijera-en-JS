function nm(){
    var a = Number(prompt('Inserte el primer numero'));
    var b = Number(prompt('Inserte al segundo numero'));
    var c = Number(prompt('Inserte el tercer numero'));
    
    if( a>b && a>c ){
            alert('Entre ' + a + ', ' + b + ' y ' + c + ': ' + a + ' Es el numero mayor :3 YAAAS!!');
    } 
    else if ( b>c && b>a){
            alert('Entre ' + a + ', ' + b + ' y ' + c + ': ' + b + ' Es el numero mayor :3 YAAAS!!');
    } 
    else {
            alert('Entre ' + a + ', ' + b + ' y ' + c + ': ' + c + ' Es el numero mayor :3 YAAAS!!');
    }
}

function ppt(){
    alert('Holiis :3 acabo de crear mi primer juego con JS, el juego es PIEDRA PAPEL O TIJERA, ¿quieres jugar? Haz clic en Aceptar');
    var nombre1 = prompt('Ingresa tu nombre');
    var nombre2 = prompt('Ingresa tu nombre');
    
    var jugador1 = prompt( nombre1 + '',' Ingresa piedra, papel o tijera');
    var jugador2 = prompt( nombre2 + '',' Ingresa piedra, papel o tijera');      
    
    if(jugador1 === 'papel' && jugador2 === 'piedra'){
        alert(nombre1 + ' gana porque sacó: ' + jugador1 + ' y ' + nombre2 + ' sacó: ' + jugador2);
    } else if ( jugador1 === 'piedra' && jugador2 === 'tijera'){
        alert(nombre1 + ' gana porque sacó: ' + jugador1 + ' y ' + nombre2 + ' sacó: ' + jugador2);
    } else if ( jugador1 === 'tijera' && jugador2 === 'papel'){
        alert(nombre1 + ' gana porque sacó: ' + jugador1 + ' y ' + nombre2 + ' sacó: ' + jugador2);
    } else if(jugador2 === 'papel' && jugador1 === 'piedra'){
                alert(nombre2 +' gana porque sacó: ' + jugador2  + ' y ' + nombre1 + ' sacó: ' + jugador1);
     } else if ( jugador2 === 'piedra' && jugador1 === 'tijera'){
                alert(nombre2 +' gana porque sacó: ' + jugador2  + ' y ' + nombre1 + ' sacó: ' + jugador1);
     } else if ( jugador2 === 'tijera' && jugador1 === 'papel'){
                alert(nombre2 +' gana porque sacó: ' + jugador2  + ' y ' + nombre1 + ' sacó: ' + jugador1);
     }
    else {
        alert(nombre1 + ' y ' + nombre2 + ' QUEDARON EMPATES, porque ambos sacaron: ' + jugador1);
    }
}


// EJEMPLO MAUI :3
// if (true) {
//     console.log('Diez es mayor que cinco... dahhh');
// };

// var edad = 22;

// if ( edad >= 18){
//     console.log('Eres mayor de edad');
// } else if (edad < 18) {
//     console.log('No eres mayor de edad');
// } else {
//     console.log('Ha ocurrido un error... debes introducir un numero!!!');
// }

// var raza_1 = 'pug';
// var raza_2 = 'pug';

// if(raza_1 === raza_2){
//     console.log('Las dos razas son iguales :3');
// } else {
//     console.log('Las dos razas son distintas :(');
// }

// var num_1 = 42;
// var num_2 = 42;

// if(num_1 === num_2){
//         console.log('Son iguales!!!');
//         if(num_1 > 10){
//             console.log('Num_1 es mayor a 10');
//             if(num_2 > 100){
//                 console.log('Num_2 es mayor a 100');
//             }
//         }
// } else {
//     console.log('Son diferentes!!!');
// }

// var num_1 = 42;
// var num_2 = 42;

// if (num_1 === num_2 && num_1 > 10 && num_2 > 10){
//         console.log('Las tres condiciones son verdaderas!!!')
// }

// if ((1>0 || 'Hola' === 'Mauricio') && 5 > 3 ){
//     console.log('Si se cumplio la condicion!');
// }







