const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")

// Route to deliver a specific vehicle by id
router.get("/detail/:inv_id", invController.buildByInvId)

module.exports = router
