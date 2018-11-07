function mainPage(app) {
    app.get("/", (req, res) => {
        var actions = [
            { button: "KEY_0", time: "000" },
            { button: "KEY_1", time: "111" },
            { button: "KEY_2", time: "222" },
            { button: "KEY_3", time: "333" },
            { button: "KEY_0", time: "000" },
            { button: "KEY_1", time: "111" },
            { button: "KEY_2", time: "222" },
            { button: "KEY_3", time: "333" },
            { button: "KEY_0", time: "000" },
            { button: "KEY_1", time: "111" },
            { button: "KEY_2", time: "222" },
            { button: "KEY_3", time: "333" },
            { button: "KEY_0", time: "000" },
            { button: "KEY_1", time: "111" },
            { button: "KEY_2", time: "222" },
            { button: "KEY_3", time: "333" },
            { button: "KEY_0", time: "000" },
            { button: "KEY_1", time: "111" },
            { button: "KEY_2", time: "222" },
            { button: "KEY_3", time: "333" },
        ]
        res.render("main", {
            buactionstons: actions
        })
    })
}

class Requests {
    constructor() {
        this.requests = [mainPage]
    }

    all(app) {
        this.requests.forEach(func => {
            func(app)
        })
    }
}

module.exports = new Requests()
