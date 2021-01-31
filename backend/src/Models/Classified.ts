import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export default class Classified {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: 'timestamptz', default: () => `NOW()` })
  date: Date
}
