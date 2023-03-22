const express = require("express")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req, file, cb) {

    },
    filename:function() {

    }
})

router.post("/", (req, res) => {
    res.send({a:1})
})


// const{createItems} = require("../controllers/storage")
// const uploadMiddleware = require("../utils/handleStorage")

// router.post("/",uploadMiddleware.single(""), createItems)




module.exports = router