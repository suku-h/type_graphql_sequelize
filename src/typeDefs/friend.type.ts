import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Friend request transaction' })
export default class Friend {
  @Field(type => Int)
  id: number

  @Field(type => Int)
  requesterId: number

  @Field(type => Int)
  requesteeId: number

  @Field()
  status: FriendStatus
}

export enum FriendStatus {
  APPROVED = 'approved',
  DECLINED = 'declined',
  PENDING = 'pending'
}