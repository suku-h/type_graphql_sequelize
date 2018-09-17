import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Books read by users' })
export default class Book {
  @Field(type => Int)
  id: number

  @Field()
  title: string

  @Field()
  author: string
}