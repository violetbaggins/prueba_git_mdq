const fs = require('fs')

console.log();
console.log('<<<<<< App de tareas >>>>>');
// let tarea = {
//     titulo: "Titulo primera tarea" ,
//     descripcion: "descripcion de la primera tarea",
//     estado: "pendiente"
// }

// ------------MICRODESAFIO-----------------------
// crear array de 3 tareas
// let tareas = [
//     {
//         titulo: "Practicar JSON" ,
//         descripcion: "Hacer los ejercicios de PG",
//         estado: "terminada"
//     },
//     {
//         titulo: "Tutorial Multer" ,
//         descripcion: "Buscar tutorial de multer",
//         estado: "en progreso"
//     },
//     {
//         titulo: "Ir a Farmacity" ,
//         descripcion: "Comprar limas de uñas",
//         estado: "pendiente"
//     },
//     {
//         titulo: "Tarea 4" ,
//         descripcion: "Comprar sanguchitos",
//         estado: "terminada"
//     }
// ];



// tareas.push(
//     {
//         titulo: "Tarea pusheada" ,
//         descripcion: "Comprar push",
//         estado: "pendiente"
//     }
// )

// ------------MICRODESAFIO-----------------------
// recorrer el array, de cada tarea mostrar el titulo
// tareas.forEach(item =>{
//     console.log("• ", item.titulo);
// })

// for (i = 0; i < tareas.length; i++){
//     console.log("♥ ", i+1 , tareas[i].titulo, ' - (', tareas[i].estado , ')');
// }

// let otraTarea =    {
//     titulo: "Tarea pusheada" ,
//     descripcion: "Comprar push",
//     estado: "pendiente"
// }

// let stringTareas = JSON.stringify(tareas, null, ' ');
// console.log(stringTareas);

// ------------MICRODESAFIO-----------------------
// crear el archivo de tareas.JSON
// leer el archivo de tareas
// Parseamos el archivo

let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8')
let tareas = JSON.parse(tareasJSON);

// ------------MICRODESAFIO-----------------------
//recorre el array de objetos
// console.log("Primera tarea: ", tarea.titulo);

// for (i = 0; i < tareas.length; i++){
//     console.log("♥ ", i+1 , tareas[i].titulo, ' - (', tareas[i].estado , ')');
// }

// ------------MICRODESAFIO-----------------------
// recorrer el array y mostrar titulo solo si la tarea esta pendiente

// for (i = 0; i < tareas.length; i++){
//     if(tareas[i].estado !== "terminada"){
//         console.log();
//         console.log("TAREAS NO TERMINADAS: ", tareas[i].titulo, ' - (', tareas[i].estado , ')');
//     }
// }
// ------------MICRODESAFIO-----------------------
// Crear funcion de listar todas
// Crear funcion de no terminadas

function listarTodas(){

    console.log();
    console.log('LISTADO DE TAREAS');
    console.log('--------------------');

    for (i = 0; i < tareas.length; i++){
        console.log("♥ ", i+1 , tareas[i].titulo, ' - (', tareas[i].estado , ')');
    }
}



function listarNoterminadas(){

    console.log();
    console.log('TAREAS NO TERMINADAS');
    console.log('--------------------');

    for (i = 0; i < tareas.length; i++){
        if(tareas[i].estado !== "terminada"){
            console.log("• ", tareas[i].titulo, ' - (', tareas[i].estado , ')');
        }
    }
}



function listarPorEstado(estado){

    console.log();
    console.log('Filtraste por ', estado);
    console.log('--------------------');

    for (i = 0; i < tareas.length; i++){
        if(tareas[i].estado == estado){
            console.log("~ ", tareas[i].titulo, ' - [', tareas[i].estado , ']');
        }
    }
}

// listarPorEstado('terminada')

let parametros = process.argv
let accion = parametros[2]



switch (accion) {
    case "todas":
        listarTodas()
        break;
    case "pendientes":
        listarNoterminadas()
        break;
    case "filtrar":
        listarPorEstado(parametros[3])
        break;


    default:
        console.log('No se de que me hablas');
        break;
}