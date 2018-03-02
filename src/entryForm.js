const h = require('hyperscript')

function field (inputTagName, inputAttributes) {
    return h('div.form-group', [
        h('label', inputAttributes.id, {'for': inputAttributes.id}),
        h(inputTagName, inputAttributes)
    ])
}

module.exports = function () {
    return h('form', [
        field('input', {
            id: 'Name',
            maxlength: 80,
            name: 'name',
            required: 'true'
        }),

        field('input', {
            id: 'Titel',
            maxlength: 255,
            name: 'title',
            required: true
        }),

        field('textarea', {
            id: 'Kommentar',
            maxlength: 20000,
            name: 'comment'
        }),

        field('input', {
            id: 'Email-Adresse',
            maxlength: 80,
            name: 'email',
            required: true
        })
    ], {
        method: 'POST',
        action: '/new'
    })
}
