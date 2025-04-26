"use client";

import {bookStore} from "@/entities/book/model/bookStore";
import {Book} from "@/shared/types/book";
import {BookCard} from "@/entities/book/ui/BookCard";


export default function BooksPage() {
    const books = bookStore((state) => state.books);
    console.log(books);
    return (
        <div className="grid grid-cols-3 gap-4 place-content-center">
            {books?.map((book: Book, index) => (
                <BookCard book={book} key={index}/>
            ))}
        </div>
    )
}