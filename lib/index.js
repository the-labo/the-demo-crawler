/**
 * Demo of the-crawler
 * @module the-demo-crawler
 */
'use strict'

const TheDemoCrwl = require('./TheDemoCrwl')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheDemoCrwl,
  create
})

module.exports = lib
