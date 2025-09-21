const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

// Vehicle detail by ID
router.get("/detail/:inv_id", invController.buildByInvId)

module.exports = router
