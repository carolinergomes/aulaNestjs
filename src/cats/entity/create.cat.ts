import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateCat {
  @PrimaryGeneratedColumn()
  id: string; 
  @Column()
  name: string;
  @Column()
  age: number;
}