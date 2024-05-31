const express = require("express");
const app = express();
const port = 3000;

const eventsRouter = require("./routers/events.js");


app.use('/', eventsRouter);

app.use('/store', eventsRouter);

app.use('/update', eventsRouter);


app.listen(port, () => {
    console.log('Server attivo sulla porta http://localhost:3000.');
});