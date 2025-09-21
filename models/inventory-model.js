const pool = require("../database/")

/* Get all classification data */
async function getClassifications() {
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

/* Get a specific vehicle by id */
async function getVehicleById(inv_id) {
  try {
    const sql = "SELECT * FROM inventory WHERE inv_id = $1"
    const result = await pool.query(sql, [inv_id])
    return result.rows[0]
  } catch (error) {
    throw error
  }
}

/* Export all functions together */
module.exports = {
  getClassifications,
  getVehicleById
}