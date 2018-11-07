const server = require("./src/backend/server/server")
const db = require('./src/backend/db/db')
const lirc = require('./src/backend/lirc/lirc')

db.init()
lirc.init(db)
const host = "0.0.0.0"
const port = 11296
server.launch(db, port, host)
