import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Article } from 'src/article/entities/article.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Author {
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  code: number

  @ManyToOne(() => Article, article => article.authors)
  @Field(() => Article)
  article: Article

  @Column()
  @Field()
  articleId: string
}
