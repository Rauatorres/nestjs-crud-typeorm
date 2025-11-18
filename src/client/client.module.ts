import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { clientProviders } from "./client.providers";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";

@Module({
    imports: [DatabaseModule],
    providers: [...clientProviders, ClientService],
    controllers: [ClientController],
    exports: [...clientProviders, ClientService],
})
export class ClientModule {}