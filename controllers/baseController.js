const utilities = require("../utilities/")

async function buildHome(req, res, next) {
  try {
    const nav = await utilities.getNav()
    res.render("index", { title: "Home", nav })
  } catch (err) {
    next(err)
  }
}

module.exports = { buildHome }