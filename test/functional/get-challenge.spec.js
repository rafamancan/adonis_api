'use strict'

const { test } = use('Test/Suite')('Get Challenge')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})
