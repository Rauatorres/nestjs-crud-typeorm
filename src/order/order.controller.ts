import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { ClientService } from "src/client/client.service";
import { ProductService } from "src/product/product.service";

@Controller('order')
export default class OrderController {
    constructor (private orderService: OrderService, private productService: ProductService) {}

    @Get('all')
    async getAll(){
        return await this.orderService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number){
        return await this.orderService.get(id);
    }

    @Get(':id/products')
    async getProducts(@Param('id') id: number){
        const order = await this.orderService.get(id)
        return order?.products;
    }

    @Post('add')
    async add(@Body() newOrder: Order){
        return await this.orderService.insert(newOrder);
    }

    @Patch(':idorder/addproduct/:idproduct')
    async addProduct(@Param() params: { idorder: number, idproduct: number }) {
        const order = await this.orderService.get(params.idorder);
        const product = await this.productService.find(params.idproduct);
        if (order!.products.length < 1){
            order!.products = [];
        }
        order!.products.push(product!);
        return await this.orderService.save(order!);
    }
    
    @Patch(':idorder/removeproduct/:idproduct')
    async removeProduct(@Param() params: { idorder: number, idproduct: number }){
        const order = await this.orderService.get(params.idorder);
        if(order!.products.some(product => product.id == params.idproduct)){
            order!.products = order!.products.filter(product => product.id != params.idproduct);
        }
        return await this.orderService.save(order!);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return await this.orderService.delete(id);
    }
}