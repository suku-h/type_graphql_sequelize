import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Ratings given by various users for the books' })
export default class Rating {
  @Field(type => Int)
  id: number

  @Field(type => Int)
  bookId: number

  @Field(type => Int)
  userId: number

  @Field(type => Int)
  rating: number
}