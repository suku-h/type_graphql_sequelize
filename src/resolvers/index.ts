import { BookResolver } from './book.resolver'
import { FriendResolver } from './friend.resolver'
import { mergeResolvers } from 'merge-graphql-schemas'
import { RatingResolver } from './rating.resolver'
import { UserResolver } from './user.resolver'

const resolvers = [
  BookResolver,
  FriendResolver,
  UserResolver,
  RatingResolver
]

export default mergeResolvers(resolvers)