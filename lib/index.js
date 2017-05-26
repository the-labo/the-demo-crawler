/**
 * Demo of the-crawler
 * @module the-demo-crawler
 */
'use strict'

const SomeCrwl = require('./SomeCrwl')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  SomeCrwl,
  create
})

module.exports = lib
