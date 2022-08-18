import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateDog {
  @PrimaryGeneratedColumn()
  id: string; 
  @Column()
  name: string;
  @Column()
  breed: string;
  @Column()
  age: number;
}