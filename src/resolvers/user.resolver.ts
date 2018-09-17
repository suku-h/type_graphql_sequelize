import User from '../typeDefs/user.type'
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver
  } from 'type-graphql'

@Resolver()
export class UserResolver {
  @Query(returns => [User])
  async getAllUsers(@Ctx('ctx') ctx): Promise<User[]> {
    return await ctx.db.User.findAll()
  }

  @Query(returns => User)
  async getUser(@Ctx('ctx') ctx, @Arg('id') id: number): Promise<User> {
    return await ctx.db.User.findOne({ where: id })
  }

  // @Query()
  // async getUserBooks(@Ctx('ctx') ctx, @Arg('id') id: number): Promise<User> {
  //   return await ctx.db.User.findOne({
  //     where: id,
  //     include: [Book]
  //   })
  // }

  @Mutation(returns => User)
  async addUser(@Ctx('ctx') ctx, @Arg('user') user: User): Promise<User> {
    if (!user.email || !user.firstName || !user.password) {
      throw new Error('Invalid parameters for creating a user')
    }
    return await ctx.db.User.create(user)
  }
}
