const buttons_dictionary = require('./button.all')

class ButtonAction {
    constructor(type, remote) {
        this.type = type
        this.remote = remote
        this.time = new Date()
    }

    toString() {
        return `ButtonAction: type=${this.type}, remote=${this.remote}, time=${this.time}`
    }

    checkSupporting() {
        if (buttons_dictionary.hasOwnProperty(this.remote)) {
            for (var i = 0; i < buttons_dictionary[this.remote].length; i++) {
                if (this.type === buttons_dictionary[this.remote][i]) {
                    return true
                }
            }
        } else {
            console.log("This remote device \'" + this.remote + "\' isn't supported")
            return false
        }

        console.log("This button type \'" + this.type + "\' isn't supported")
        return false
    }
}

module.exports = ButtonAction
