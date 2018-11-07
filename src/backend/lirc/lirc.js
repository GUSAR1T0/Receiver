const lirc = require('lirc-client')({
    path: '/var/run/lirc/lircd'
});
const ButtonAction = require('../data/button.action')

class Lirc {
    init(db) {
        lirc.on('connect', () => {
            console.log("LIRC is connected");
        });

        lirc.on('receive', function (remote, type, repeat) {
            var button = new ButtonAction(type, remote)
            if (button.checkSupporting()) {
                console.log(button.toString() + ": was pressed");
                db.insert(button.type, button.remote, button.time)
            } else {
                console.log(button.toString() + ": unknown type/remote");
            }
        });
    }
}

module.exports = new Lirc()
