const jsonSever = require('json-server')
const server = jsonSever.create()
const path = require('path')
const router = jsonSever.router(path.join(__dirname, 'db.json'))
const middlewares = jsonSever.defaults()

server.use(middlewares)
server.use(jsonSever.bodyParser)

let port = 80;
server.listen(port, () => {
	console.log(`json server is running, port(${port})`)
})