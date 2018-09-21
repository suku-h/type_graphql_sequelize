import * as Sequelize from 'sequelize'
import 'reflect-metadata'

// operatorAliases: false removes this warning 'sequelize deprecated String based operators'
const sequelize = new Sequelize(
  'graphqltutdb',
  'graphqltut',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false
  }
)

const db = {
  User: sequelize.import('./user.model'),
  Book: sequelize.import('./book.model'),
  Rating: sequelize.import('./rating.model'),
  Friend: sequelize.import('./friend.model'),
  sequelize: sequelize
}

export default db