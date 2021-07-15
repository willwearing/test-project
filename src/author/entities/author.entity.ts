import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
