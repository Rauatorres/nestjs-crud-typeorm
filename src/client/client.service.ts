import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY') private clientRepository: Repository<Client>,
  ) {}

  async findAll() {
    return await this.clientRepository.find();
  }

  async add(client: Client) {
    return await this.clientRepository.insert(client);
  }

  async delete(id: number) {
    return await this.clientRepository.delete(id);
  }

  async update(id: number, data: Partial<Client>) {
    return await this.clientRepository.update(id, data);
  }
}
