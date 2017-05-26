/**
 * Create a TheDemoCrwl instance
 * @function create
 * @param {...*} args
 * @returns {TheDemoCrwl}
 */
'use strict'

const TheDemoCrwl = require('./TheDemoCrwl')

/** @lends create */
function create (...args) {
  return new TheDemoCrwl(...args)
}

module.exports = create
