import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Book from "../typeorm/entities/Book";
import BookRepository from "../typeorm/repositories/BookRepository";

interface IRequest {
  id: string;
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

export default class UpdateBookService {
  public async execute({
    id,
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

    const book = await bookRepository.findOne(id);
    if (!book) {
      throw new AppError("Book not found");
    }
    const bookExists = await bookRepository.findByName(name);
    if (bookExists && name != book.name) {
      throw new AppError("There is already one book with this name");
    }

    book.name = name;
    book.author = author;
    book.cover = cover;
    book.edition = edition;
    book.language = language;
    book.pages = pages;
    book.publishing_company = publishing_company;
    book.genre = genre;
    book.sub_genre = sub_genre;
    book.price = price;
    book.quantity = quantity;
    book.release_date = release_date;

    await bookRepository.save(book);
    return book;
  }
}
