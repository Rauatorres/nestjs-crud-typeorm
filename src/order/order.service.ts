import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "src/product/product.entity";

@Injectable()
export class OrderService{
    constructor(
        @Inject('ORDER_REPOSITORY')
        private orderRepository: Repository<Order>,
    ) {}

    async getAll(){
        return await this.orderRepository.find({
            relations: {
                client: true,
                products: true,
            }
        });
    }

    async get(id: number){
        return await this.orderRepository.findOne({ 
            where: { id: id },
            relations: {
                client: true,
                products: true,
            } 
        });
    }

    async getByClient(clientId: number){
        return await this.orderRepository.find({ 
            relations: {
                client: true,
                products: true,
            },
            where: { 
                client: {
                    id: clientId
                } 
            } 
        });
    }

    async insert(newOrder: Order){
        return await this.orderRepository.insert(newOrder);
    }
    
    async delete(id: number){
        return await this.orderRepository.delete(id);
    }
    
    async save(order: Order){
        return await this.orderRepository.save(order);
    }
}