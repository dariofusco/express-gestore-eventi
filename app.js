const express = require("express");
const app = express();
const port = 3000;

const eventsRouter = require("./routers/events.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/events', eventsRouter);


app.listen(port, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});