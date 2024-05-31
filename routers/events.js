const express = require("express");
const router = express.Router();

const eventsControllers = require("../controllers/events.js");

const multer = require("multer");

router.get("/events", eventsControllers.index);

router.post("/events", eventsControllers.store);

router.put("/events/:id", eventsControllers.update);


module.exports = router;
