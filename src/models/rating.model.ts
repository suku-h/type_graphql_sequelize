import * as Sequelize from 'sequelize'

export default (sequalize: Sequelize.Sequelize) => {
  const RatingSchema = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }

  return sequalize.define('Rating', RatingSchema)
}