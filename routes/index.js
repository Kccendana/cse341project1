const express = require("express");
const router = new express.Router();

// router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/", (req, res, next) => {
  res.send("Hello World")
});


module.exports = router;
