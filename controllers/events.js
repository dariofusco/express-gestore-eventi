const Event = require('../models/event.js');

const index = (req, res) => {

    const events = Event.readJSONData('events');

    const idEvent = req.params.id;
    const requestEvent = events.find(event => event.id === idEvent);

    if(requestEvent) {
        res.json({...requestEvent});
    }

    res.json(events);

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