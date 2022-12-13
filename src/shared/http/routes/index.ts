import booksRouter from "@modules/books/routes/books.routes";
import { Router } from "express";

const routes = Router();

routes.use('/books', booksRouter);

export default routes;
