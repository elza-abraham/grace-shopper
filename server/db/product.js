const db = require('./database')
const Sequelize = require('sequelize')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: './img/defaultpic.png'
  }
})

module.exports = Product