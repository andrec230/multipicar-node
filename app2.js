// Optimizaremos el uso de yargs
const { crearArchivo, listarEnConsola } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors') // Se ha instalado el paquete npm install colors --save

// Se valida comandos recibidos por consola
let command = argv._[0]
switch (command) {
    case 'listar':
        listarEnConsola(argv.base, argv.limite)
    break

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((mensaje) => {
            // con el paquete colors pintamos de verde el nomre del archivo
            console.log(`Archivo creado: ${ colors.green(mensaje) }`)
        }).catch((err) => console.log(err))            
    break

    default:
        console.log('Comando no reconocido')
    break
}
