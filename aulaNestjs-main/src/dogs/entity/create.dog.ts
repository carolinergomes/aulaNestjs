import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string; 
  @Column()
  name: string;
  @Column()
  breed: string;
  @Column()
  age: number;
}