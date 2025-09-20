const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

/* Build vehicle detail by inv_id */
async function buildByInvId(req, res, next) {
  try {
    const inv_id = parseInt(req.params.inv_id)
    const data = await invModel.getVehicleById(inv_id)

    if (!data) {
      return res.status(404).render("inventory/notFound", {
        title: "Vehicle Not Found",
        message: "Sorry, that vehicle is not in our inventory."
      })
    }

    const vehicleHtml = utilities.buildVehicleDetailHTML(data)
    const nav = await utilities.getNav()

    res.render("inventory/detail", {
      title: `${data.inv_make} ${data.inv_model}`,
      nav,
      vehicle: vehicleHtml,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { buildByInvId }
