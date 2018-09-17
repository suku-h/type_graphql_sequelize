import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Users who have signed up' })
export default class User {
  @Field(type => Int)
  id: number

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  firstName: string

  @Field()
  lastName: string
}