import * as Sequelize from 'sequelize'
import { FriendStatus } from '../typeDefs/friend.type'

export default (sequalize: Sequelize.Sequelize) => {
  const FriendSchema = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    requesterId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    requesteeId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(10),
      default: FriendStatus.PENDING,
      allowNull: false
    }
  }

  return sequalize.define('Friend', FriendSchema)
}