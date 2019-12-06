require('dotenv').config()
const AWS = require('aws-sdk')
const assert = require('assert')

class DynamoManager {
  constructor(region = process.env.AWS_REGION) {
    if (!region) throw new Error('AWS region name is required')
    AWS.config.update({ region })
    this.ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
    this.client = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
  }

  async list(Limit = 10) {
    try {
      const { TableNames } = await this.ddb.listTables({ Limit }).promise()
      console.log('----TableNames---')
      console.log(TableNames)
      return TableNames
    } catch (err) {
      console.log('Error', err)
    }
  }
  setTable(tableName) {
    assert(tableName)
    this.tableName = tableName
  }


}

const db = new DynamoManager()
db.list()

// module.exports = DynamoManager
