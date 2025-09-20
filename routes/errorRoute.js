const express = require("express")
const router = new express.Router()
const errorController = require("../controllers/errorController")

router.get("/cause-error", errorController.triggerError)

module.exports = router
