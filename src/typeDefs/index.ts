import Book from './book.type'
import Friend from './friend.type'
import Rating from './rating.type'
import User from './user.type'
import { mergeTypes } from 'merge-graphql-schemas'

const types = [
  Book,
  Friend,
  Rating,
  User
]

export default mergeTypes(types)