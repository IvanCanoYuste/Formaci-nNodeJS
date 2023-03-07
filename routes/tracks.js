const express = require("express")
const {getItems, getItem, createItems} = require("../controllers/tracks")
const router = express.Router()

//TODO http://localhost/tracks

router.get("/", getItems)
router.post("/", createItems)



module.exports = router