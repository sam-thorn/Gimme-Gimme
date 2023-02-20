const connection = require('./connection')

function getFruits (db = connection) {
  return db('fruit').select()
}

function getColorName (db = connection) {
  return db('name').select()
}

module.exports = {
  getFruits,
  getColorName
}
