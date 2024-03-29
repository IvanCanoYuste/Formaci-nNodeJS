const {storageModel} = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL
/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})

    res.send({data})
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItems = async (req, res) => {
    const {body, file} = req
    console.log(file)
    // const fileData = {
    //     filename:file.filename,
    //     url: `${PUBLIC_URL}/${file.filename}`
    // }
    // const data = await storageModel.create(body)
    res.send({file})
}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req, res) => {}



module.exports = {getItems, getItem, createItems, updateItems, deleteItems}