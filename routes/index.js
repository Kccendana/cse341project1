// const express = require("express");
// const router = new express.Router();

// // router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
// router.get("/", (req, res, next) => {
//   res.send("Hello World")
// });


// module.exports = router;
const express = require("express");
const router = new express.Router();
const contactRoutes = require('./contacts')

// router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/", (req, res) => {
  // #swagger.tags = ['Hello World']
  res.send("Hello World")
});

router.use('/contacts', contactRoutes);
router.use('/api-docs', require('./swagger'));



module.exports = router;