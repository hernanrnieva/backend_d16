require('dotenv').config()

/* Users */
const userDaoFile = require('../users/usersDaoFile')
const userDaoMongo = require('../users/usersDaoMongo')

/* Products */
const productDaoFile = require('../products/productsDaoFile')
const productDaoMongo = require('../products/productsDaoMongo')

/* Messages */
const messageDaoFile = require('../messages/messagesDaoFile')
const messageDaoMongo = require('../messages/messagesDaoMongo')

const data = {
    usersPersistence: process.env.USERS_PERSISTENCE? process.env.USERS_PERSISTENCE : 'file',
    productsPersistence: process.env.PRODUCTS_PERSISTENCE? process.env.PRODUCTS_PERSISTENCE : 'file',
    messagesPersistence: process.env.MESSAGES_PERSISTENCE? process.env.MESSAGES_PERSISTENCE : 'file',
}

class DaoFactory {
    constructor() {
        this.date = new Date().toLocaleString()
    }

    getUserPersistence() {
        if(data.usersPersistence == 'file') return userDaoFile
        if(data.usersPersistence == 'mongo') return userDaoMongo
    }

    getProductPersistence() {
        if(data.productsPersistence == 'file') return productDaoFile
        if(data.productsPersistence == 'mongo') return productDaoMongo
    }

    getMessagePersistence() {
        if(data.messagesPersistence == 'file') return messageDaoFile
        if(data.messagesPersistence == 'mongo') return messageDaoMongo
    }
}

const daoFactory = new DaoFactory()

module.exports = daoFactory