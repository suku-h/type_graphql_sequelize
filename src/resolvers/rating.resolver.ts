import * as _ from 'lodash'
import Rating from '../typeDefs/rating.type'
import {
  Arg,
  Ctx,
  Int,
  Query,
  Resolver
  } from 'type-graphql'

@Resolver()
export class RatingResolver {
  @Query(returns => Int)
  async getBookRatings(@Ctx('ctx') ctx: any, @Arg('id') id: number): Promise<Rating> {
    return await ctx.db.Rating.findAll({
      where: {
        bookId: id
      }
    })
  }
}
