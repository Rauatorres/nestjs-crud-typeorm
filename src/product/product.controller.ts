import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async findAll() {
    return await this.productService.findAll();
  }

  @Post('add')
  async add(@Body() body: Product) {
    return await this.productService.insert(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.productService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: Partial<Product>) {
    return await this.productService.update(id, body);
  }
}
