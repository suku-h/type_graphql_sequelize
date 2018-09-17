import * as Sequelize from 'sequelize'
import Book from './book.model'
import Friend from './friend.model'
import Rating from './rating.model'

export default (sequalize: Sequelize.Sequelize) => {
  const User = sequalize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING(50)
    }
  })

  /**
   * To understand belongsToMany association
   * http://docs.sequelizejs.com/manual/tutorial/associations.html#belongs-to-many-associations
   */
  /**
   * The target key is the column on the target model 
   * that the foreign key column on the source model points to. 
   * By default the target key for a belongsTo relation will be the target model's primary key. 
   * To define a custom column, use the targetKey option.
   */
  /**
   * otherKey will allow you to set target model key in the through relation.
   */
  User.belongsToMany(User, { through: Friend, foreignKey: 'id', targetKey: 'requesteeId', otherKey: 'requesterId' })
  User.belongsToMany(Book, { through: Rating, foreignKey: 'id', targetKey: 'userId' })

  return User
}