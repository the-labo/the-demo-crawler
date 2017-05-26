/**
 * Create a SomeCrwl instance
 * @function create
 * @param {...*} args
 * @returns {SomeCrwl}
 */
'use strict'

const SomeCrwl = require('./SomeCrwl')

/** @lends create */
function create (...args) {
  return new SomeCrwl(...args)
}

module.exports = create
