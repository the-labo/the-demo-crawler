/**
 * Test for SomeCrwl.
 * Runs with mocha.
 */
'use strict'

const theDB = require('the-db')
const SomeCrwl = require('../lib/SomeCrwl')
const { ok, equal } = require('assert')

describe('the-demo-crawler', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    const db = theDB({})
    const resource = db.resource('SomeCrwlResult')

    ok(SomeCrwl)

    let crwl = new SomeCrwl(resource)
    ok(crwl)
  })
})

/* global describe, before, after, it */
