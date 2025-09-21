const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

/* ************************
 * Build detail view by inv_id
 ************************ */
async function buildByInvId(req, res, next) {
  try {
    const inv_id = req.params.inv_id
    const item = await invModel.getVehicleById(inv_id)
    const nav = await utilities.getNav()
    res.render("inventory/detail", {
      title: `${item.inv_make} ${item.inv_model}`,
      nav,
      item
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { buildByInvId }
