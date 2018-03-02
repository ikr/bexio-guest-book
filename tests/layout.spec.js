const assert = require('assert')
const layout = require('../src/layout')

describe('layout', () => {
    it('starts with <!doctype', () => {
        assert.strictEqual(layout('').indexOf('<!doctype'), 0)
    })

    it('contains the provided body html', () => {
        assert(layout('Hey there!').indexOf('Hey there!') > 0)
    })
})
