const fs = require("fs");
const path = require("path");

class Event {
    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    static readJSONData = (fileName) => {
        const filePath = path.join(__dirname, `../db/${fileName}.json`);
        const fileData = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileData);
    }

    static writeJSONData = (fileName, newData) => {
        const filePath = path.join(__dirname, `../db/${fileName}.json`);
        const fileString = JSON.stringify(newData);
        fs.writeFileSync(filePath, fileString);
        fileData = newData;
    }
}

let event = new Event(1, "titolo di prova", "descrizione di prova", "data di prova", 5);

//console.log(Event.writeJSONData('events', event));


module.exports = Event;