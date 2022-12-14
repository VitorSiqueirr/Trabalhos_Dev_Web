import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Book from "../typeorm/entities/Book";
import BookRepository from "../typeorm/repositories/BookRepository";

interface IRequest {
  name: string;
  author: string;
  cover: string;
  edition: number;
  language: string;
  pages: number;
  publishing_company: string;
  genre: string;
  sub_genre: string;
  price: number;
  quantity: number;
  release_date: Date;
}

export default class CreateBookService {
  public async execute({
    name,
    author,
    cover,
    edition,
    language,
    pages,
    publishing_company,
    genre,
    sub_genre,
    price,
    quantity,
    release_date,
  }: IRequest): Promise<Book> {
    const bookRepository = getCustomRepository(BookRepository);

    const bookExists = await bookRepository.findByName(name);
    if (bookExists) {
      throw new AppError("There is already one book with this name");
    }
    const book = bookRepository.create({
      name,
      author,
      cover,
      edition,
      language,
      pages,
      publishing_company,
      genre,
      sub_genre,
      price,
      quantity,
      release_date,
    });
    await bookRepository.save(book);
    return book;
  }
}
