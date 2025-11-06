import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('all')
  async findAll() {
    return await this.clientService.findAll();
  }

  @Post('add')
  async add(@Body() client: Client) {
    return await this.clientService.add(client);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.clientService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Client>) {
    return await this.clientService.update(id, data);
  }
}
