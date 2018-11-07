const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('receiver.json')
const db = low(adapter)

function init() {
    db.defaults({ actions: [] }).write()
}

function insert(button, remote, time) {
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    var formattedTime = time.toLocaleString("en-US", options)
    db.get('actions').push({ button: button, remote: remote, time: formattedTime }).write()
}

function all() {
    return db.get('actions').value()
}

module.exports = {
    init: init,
    insert: insert,
    all: all
}
