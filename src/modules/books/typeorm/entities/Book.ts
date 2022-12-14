import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("books")
export default class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  author: string;
  @Column()
  cover: string;
  @Column("int")
  edition: number;
  @Column()
  language: string;
  @Column("int")
  pages: number;
  @Column()
  publishing_company: string;
  @Column()
  genre: string;
  @Column()
  sub_genre: string;
  @Column("decimal")
  price: number;
  @Column("int")
  quantity: number;
  //foto
  @CreateDateColumn()
  release_date: Date;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
}
