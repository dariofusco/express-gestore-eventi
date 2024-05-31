const express = require("express");
const router = express.Router();

const eventsControllers = require("../controllers/events.js");


router.get("/", eventsControllers.index);

router.get("/:id", eventsControllers.index);

router.post("/store", eventsControllers.store);

router.put("/:id", eventsControllers.update);


module.exports = router;
