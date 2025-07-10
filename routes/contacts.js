// const express = require("express");
// const router = express.Router();
// const contactsController = require("../controller/contacts");

// router.get("/", contactsController.getAll);
// router.get("/:id", contactsController.getSingle);

// module.exports = router;
const express = require("express");
const router = express.Router();
const contactsController = require("../controller/contacts");

// router.get("/", usersController.getAll);
// router.get("/:id", usersController.getSingle);
// router.post("/", usersController.createUser);
// router.put("/:id", usersController.updateUser);

router.get("/", (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get all contacts'
  contactsController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Get contact by ID'
  contactsController.getSingle(req, res);
});

router.post("/", (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Create a new contact'
  contactsController.createContact(req, res);
});

router.put("/:id", (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Update a contact by ID'
  contactsController.updateContact(req, res);
});

router.delete("/:id", (req, res) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Delete a contact by ID'
  contactsController.deleteContact(req, res);
});

module.exports = router;
