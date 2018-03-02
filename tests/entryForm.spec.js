const assert = require('assert')
const entryForm = require('../src/entryForm')

describe('entryForm', () => {
    it('it provides outerHTML starting with <form', () => {
        assert.strictEqual(entryForm().outerHTML.indexOf('<form'), 0)
    })
})
