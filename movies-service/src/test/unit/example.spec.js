'use strict'

const { test, trait } = use('Test/Suite')('Example unit test')

trait(function (suite) {
  suite.Context.getter('foo', () => {
    return 'bar'
  })
})

test('foo must be bar', async ({ foo, assert }) => {
  assert.equal(foo, 'bar')
})
