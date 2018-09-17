import * as Sequelize from 'sequelize'
import Rating from './rating.model'
import User from './user.model'

export default (sequalize: Sequelize.Sequelize) => {
  const Book = sequalize.define('Book', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    author: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  })

  Book.belongsToMany(User, { through: Rating, foreignKey: 'id', targerKey: 'bookId' })

  return Book
}