import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => Author)
  createAuthor(@Args('author') author: CreateAuthorInput) {
    return this.authorService.create(author);
  }

  @Query(() => [Author], { name: 'findAllAuthors' })
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => Author, { name: 'findAuthor' })
  findOne(@Args('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => Author)
  updateAuthor(@Args('author') author: UpdateAuthorInput) {
    return this.authorService.update(author.id, author);
  }
}
