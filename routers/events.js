const express = require("express");
const router = express.Router();

const eventsControllers = require("../controllers/events.js");


router.get("events/", eventsControllers.index);

router.post("events/store", eventsControllers.store);

router.put("events/update", eventsControllers.update);


module.exports = router;
