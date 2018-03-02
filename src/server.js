const restify = require('restify')
const layout = require('./layout')
const entryForm = require('./entryForm')

module.exports = function () {
    const server = restify.createServer()

    server.get('/new', (req, res, next) => {
        const body = layout(entryForm().outerHTML)

        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/html'
        })
        res.write(body)
        res.end()
    })

    return server
}
