'use strict'

const theDB = require('the-db')
const { SomeCrwl } = require('the-demo-crawler')

async function tryExample () {
  const db = theDB({ /* ... */ })

  const resource = db.resource('SomeCrwlResult')
  {
    let crawler = new SomeCrwl(resource)

    await crawler.run({})
  }
}

tryExample().catch((err) => console.error(err))
