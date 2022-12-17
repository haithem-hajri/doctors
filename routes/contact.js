const express = require("express");
const router = express.Router();
const { addContact, getContacts } = require("../controllers/contact");
router.post("/contact-us", addContact);
router.get("/contact-us", getContacts);
module.exports = router;

// "server": "node server.js",
// "client": "npm start --prefix client",
// "clientinstall": "npm install --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\"",
// "render-postbuild": "NPM_CONFIG_PRODUCTION=false npm install && npm install --prefix client && npm run build --prefix client"
