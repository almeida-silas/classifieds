import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export default class Classified {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: 'timestamptz', default: () => `LOCALTIMESTAMP  AT TIME ZONE '${-3}'` })
  date: string
}
