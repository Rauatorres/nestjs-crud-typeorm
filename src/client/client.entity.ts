import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column('int')
    age: number;
}