import Book from '../typeDefs/book.type'
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver
  } from 'type-graphql'

@Resolver()
export class BookResolver {
  @Query(returns => [Book])
  async getAllBooks(@Ctx('ctx') ctx: any): Promise<Book[]> {
    return await ctx.db.Book.findAll()
  }

  @Query(returns => Book)
  async getBook(@Ctx('ctx') ctx: any, @Arg('id') id: number): Promise<Book> {
    return await ctx.db.Book.findOne({ where: id })
  }

  @Mutation(returns => Book)
  async addBook(@Ctx('ctx') ctx: any, @Arg('book') book: Book): Promise<Book> {
    if (!book.title || !book.author) {
      throw new Error('Invalid parameters for adding a book')
    }
    return await ctx.db.Book.create(book)
  }
}
