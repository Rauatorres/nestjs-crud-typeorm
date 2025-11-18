import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async find(id: number){
    return await this.productRepository.findOne({ where: { id: id } });
  }

  async insert(product: Product) {
    return await this.productRepository.insert(product);
  }

  async delete(id: number) {
    return await this.productRepository.delete(id);
  }

  async update(id: number, data: Partial<Product>) {
    return await this.productRepository.update(id, data);
  }
}
