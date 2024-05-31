const express = require("express");
const router = express.Router();

const eventsControllers = require("../controllers/events.js");

const multer = require("multer");

router.get("/", eventsControllers.index);

router.post("/store", eventsControllers.store);

router.put("/:id", eventsControllers.update);


module.exports = router;
