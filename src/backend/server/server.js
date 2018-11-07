const Express = require("express")
const requests = require("./requests")
const path = require('path')

const staticPath = path.join(__dirname, '../../')
const viewsPath = path.join(staticPath, 'views')

class ServerHandler {
    constructor(db, port, host) {
        this.db = db
        this.port = port
        this.host = host
        this.app = Express()
    }

    setup() {
        this.app.engine('html', require('ejs').renderFile)
        this.app.set('view engine', 'ejs')
        this.app.set('views', viewsPath)
        this.app.use(Express.static(staticPath));

        requests.all(this.db, this.app)

        return this
    }

    launch() {
        this.app.listen(this.port, this.host)
    }
}

class Server {
    launch(db, port, host) {
        new ServerHandler(db, port, host).setup().launch()
    }
}

module.exports = new Server()
