import * as Sequelize from 'sequelize'

const sequelize = new Sequelize(
  'graphqltutdb',
  'graphqltut',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres'
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