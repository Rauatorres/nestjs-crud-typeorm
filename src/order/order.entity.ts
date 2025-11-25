import { Client } from 'src/client/client.entity';
import { Product } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client)
  client: Client;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column({ type: 'date' })
  expiresAt: string;
}
