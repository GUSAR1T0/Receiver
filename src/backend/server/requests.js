function mainPage(db, app) {
    app.get("/", (req, res) => {
        res.render("main", {
            actions: db.all()
        })
    })
}

class Requests {
    constructor() {
        this.requests = [mainPage]
    }

    all(db, app) {
        this.requests.forEach(func => {
            func(db, app)
        })
    }
}

module.exports = new Requests()
