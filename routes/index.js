const express = require("express")
const fs = require("fs")
const { fileURLToPath } = require("url")
const router = express.Router()
const PATH_ROUTES = __dirname

//TODO http://localhost/tracks

/**
 * Función para quitar la extensión
 * 
 * @param fileName Nombre del archivo
 * @returns Nombre del archivo sin terminación
 */
const removeExtension = (fileName) => {
    return fileName.split(".").shift()
}

//Lleemos de forma asincrona los ruta absoluta de del index
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)

    if(name != "index") {
        router.use(`/${name}`, require(`./${file}`))
    }
})




module.exports = router