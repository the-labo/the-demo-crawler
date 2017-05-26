'use strict'

const theDB = require('the-db')
const { SomeCrwl } = require('the-demo-crawler')

async function tryExample () {
  const db = theDB({ /* ... */ })

  const SomeCrwlResult = db.resource('SomeCrwlResult')
  {
    let crawler = new SomeCrwl()
    crawler.addResource(SomeCrwlResult)

    await crawler.run({})
  }
}

tryExample().catch((err) => console.error(err))
