const fs = require('fs'); //para hacer manejo del filesystem
const colors = require('colors')

let getData = (base, limite) => {
    let data = ''
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`
    }
    return data
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!base) {
           reject(new Error('La base es requerida'))
           return
        }
        
        if(!Number(base)) {
            reject(new Error(`La base introducida '${base}', debe ser numérica`))
            return
        }
        let data = getData(base, limite)        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
             if (err) reject(err);
    
             resolve(`tabla-${base}.txt`)
         })
    })
}

let listarEnConsola = (base, limite = 10) => {
    console.log('===================='.blue)
    console.log(`Tabla del ${base}`.blue)
    console.log('===================='.blue)
    console.log(getData(base, limite))
}

module.exports = {crearArchivo, listarEnConsola}
