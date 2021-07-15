import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleCreateDTO } from './dto/create-employee-input';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async create(article: ArticleCreateDTO): Promise<Article> {
    const createArticle = this.articleRepository.create(article);
    return this.articleRepository.save(createArticle);
  }
}
