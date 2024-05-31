const path = require("path");
const fs = require("fs");

let events = require("../db/events.json");

const Event = require('../models/event.js');

const index = (req, res) => {

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

}

const update = () => {

}


module.exports = {
    index,
    store,
    update
}