'use strict'

const theDB = require('the-db')
const theDemoCrawler = require('the-demo-crawler')

async function tryExample () {
  const db = theDB({ /* ... */ })

  const resource = db.resource('Result')
  {
    let crawler = theDemoCrawler(resource)

    await crawler.run({})
  }
}

tryExample().catch((err) => console.error(err))
