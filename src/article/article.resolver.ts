import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/create-employee-input';
import { Article } from './entities/article.entity';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private articleService: ArticleService) {}
  @Query(() => [Article], { name: 'getAllArticles' })
  findAll() {
    return this.articleService.findAll();
  }

  @Mutation(() => Article, { name: 'createArticle' })
  create(@Args('articleInput') article: ArticleCreateDTO) {
    return this.articleService.create(article);
  }
}
