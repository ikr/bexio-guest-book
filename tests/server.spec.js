const assert = require('assert')
const {createStringClient} = require('restify-clients')
const server = require('../src/server')

describe('server', () => {
    let srv
    let client = createStringClient({url: 'http://127.0.0.1:1337'})

    before((done) => {
        srv = server()
        srv.listen(1337, done)
    })

    after(() => {
        client.close()
        srv.close()
    })

    describe('GET /new', () => {
        let response
        let body
        let error

        beforeEach((done) => {
            client.get('/new', (err, req, res, data) => {
                error = err
                response = res
                body = data
                done()
            })
        })

        it('raises no error', () => {
            assert.ifError(error)
        })

        it('return <form in the body', () => {
            assert(body.indexOf('<form') > 0)
        })

        it('has the plain text content type', () => {
            assert.strictEqual(response.headers['content-type'], 'text/html')
        })
    })
})
