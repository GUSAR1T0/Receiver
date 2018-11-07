const server = require("./src/backend/server/server")
const db = require('./src/backend/db/db')

db.init()
const host = "0.0.0.0"
const port = 11296
server.launch(db, port, host)
