import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from 'src/author/entities/author.entity';
import { OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Article {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  date: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  author: string;

  @OneToMany(() => Author, auth=>auth.article)
  @Field(() => Author)
  authors: Author[]
}
