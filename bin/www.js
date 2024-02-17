// module dependencies
import { app } from '../server.js'
import http from 'http'

// get port from .env and store in Express
const port = normalizePort(3001)
app.set('port', port)

// create HTTP server
const server = http.createServer(app)

// listen on provided port, for all network interfaces
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

// normalize port
function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    // named pipe
    return val
  }
  if (port >= 0) {
    // port number
    return port 
  }
  return false
}

// even listener for HTTP server `error` event
function onError(error) {
  if(error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCESS':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

// event listener for HTTP server `listening` event
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.log(`listening on ${bind}`)
}