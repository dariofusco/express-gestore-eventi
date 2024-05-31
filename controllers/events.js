const path = require("path");
const fs = require("fs");

const Event = require('../models/event.js');

const index = (req, res) => {

    const events = Event.readJSONData('events');

    let html = '<ul>';
    events.forEach(event => {
        html += `<li>
                    <div>
                        <a href="${event.id}"><h1>${event.title} - ${event.date}</h1></a>
                        <p>${event.description} - Numero massimo di posti: ${event.maxSeats}</p>
                    </div>
                </li>`
    });
    html += '</ul>';
    res.send(html);

}

const store = (req, res) => {
    const { id, title, description, date, maxSeats } = req.body;

    const event = new Event(id, title, description, date, maxSeats);
    
    Event.writeJSONData('events', event);

    res.json(event);

}

const update = () => {

}


module.exports = {
    index,
    store,
    update
}