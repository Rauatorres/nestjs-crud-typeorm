import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { orderProviders } from "./order.providers";
import { OrderService } from "./order.service";
import OrderController from "./order.controller";
import { ClientModule } from "src/client/client.module";
import { ClientService } from "src/client/client.service";
import { ProductModule } from "src/product/product.module";

@Module({
    imports: [DatabaseModule, ClientModule, ProductModule],
    providers: [...orderProviders, OrderService],
    controllers: [OrderController]
})
export class OrderModule {}
