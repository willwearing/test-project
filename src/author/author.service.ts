import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {

  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) {}

  async create(author: CreateAuthorInput) : Promise<Author> {
    let auth = this.authorRepository.create(author);
    return this.authorRepository.save(auth)
  }

  async findAll() : Promise<Author[]> {
    return this.authorRepository.find()
  }

  async findOne(id: string) : Promise<Author> {
    return this.authorRepository.findOne(id)
  }

  async update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }
}
