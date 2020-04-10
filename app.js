// requires
// Decomponemos multiplicar const { crearArchivo } para disponer de la función 
// crearArchivo directamente
const { crearArchivo, listarEnConsola } = require('./multiplicar/multiplicar')
const yargs = require('yargs')  //Hemos instalado el paquete 'yargs' por 'npm install' 

// Usando 'yargs' pasamos la base como argumento de línea de comandos al momento de la ejecución, 
// de la siguiente manera 'nodemon app [--base n]'


// let args = process.argv //procesamos los argumentos de linea de comandos con el objeto process
// console.log(args)   // Imprime el arreglo de argumentos, complicado de manejar para argumentos elaborados
// Se deben manejar las excepciones manualmente según el arreglo de argumentos
// if(args.length != 3) {
//     throw new Error('Se debe pasar la base como argumento por línea de comandos así: --base=n')
// }
// let base = args[2].split('=')[1]

// Mejor el manejo con 'yargs'
//Configuremos yargs de la siguiente manera:
yargs.command(
    'listar', //nombre del comando
    'Imprime en consola la tabla de multiplicar', //Descripción
    { //objeto para los flags del comando
        base: {
            demand: true, // el flag es obligatorio
            alias: 'b' // alias para el flag 'base'
        },
        limite: {
            alias: 'l',
            default: 10 // valor por defecto del flag
        }
    }
)
.command(
    'crear', 
    'Crea un archivo .txt con la tabla de multiplicar en ./tablas', 
    { 
        base: {
            demand: true, 
            alias: 'b' 
        },
        limite: {
            alias: 'l',
            default: 10 
        }
    }
)

let argv = yargs.argv

// Imprimimos el objeto de argumentos que nos proporciona 'yargs'
console.log(argv)

// Obtenemos el valor de 'base' en el argumento de 'yargs'
// console.log(`El valor del flag 'base' es ${argv.b}`)
// console.log(`El valor del flag 'limite' es ${argv.l}`)


// Vamos a validar los comandos que nos llegan para proceder con la creación de la tabla
let command = argv._[0]
switch (command) {
    case 'listar':
        listarEnConsola(argv.base, argv.limite)
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((mensaje) => {
            console.log(`Archivo creado: ${ mensaje }`)
        }).catch((err) => console.log(err))            
    break

    default:
        console.log('Comando no reconocido')
        break
}
