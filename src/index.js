const server = require('./server')

function port () {
    return process.argv[2]
}

console.log(`starting on port ${port()}`)
server().listen(port())
