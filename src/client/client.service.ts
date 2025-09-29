import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Client } from "./client.entity";

@Injectable()
export class ClientService{
    constructor (@Inject('CLIENT_REPOSITORY') private clientRepository: Repository<Client>) {}

    async findAll(){
        return await this.clientRepository.find();
    }
}