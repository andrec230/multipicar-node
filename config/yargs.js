const yargs = require('yargs')  //Hemos instalado el paquete 'yargs' por 'npm install' 

const opts = { // Estas opciones se repiten para ambos comandos
    base: {
        demand: true, // el flag es obligatorio
        alias: 'b' // alias para el flag 'base'
    },
    limite: {
        alias: 'l',
        default: 10 // valor por defecto del flag
    }
}
yargs
.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
.command('crear', 'Crea un archivo .txt con la tabla de multiplicar en ./tablas', opts)

const argv = yargs.argv

module.exports = { argv }