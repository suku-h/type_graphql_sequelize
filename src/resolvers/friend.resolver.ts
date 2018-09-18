import {
  Arg,
  Ctx,
  Int,
  Query,
  Resolver
  } from 'type-graphql'
import { FriendStatus } from '../typeDefs/friend.type'
import { Op } from 'sequelize'

@Resolver()
export class FriendResolver {
  @Query(returns => Int)
  async getFriendsCount(@Ctx('ctx') ctx: any, @Arg('id') id: number): Promise<number> {
    return await ctx.db.Friend.count({
      where: {
        status: FriendStatus.APPROVED,
        [Op.or]: [{ requesterId: id }, { requesteeId: id }]
      }
    })
  }
}
