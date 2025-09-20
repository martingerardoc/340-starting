function triggerError(req, res, next) {
  try {
    throw new Error("Intentional 500 error for testing purposes.")
  } catch (err) {
    next(err)
  }
}

module.exports = { triggerError }
