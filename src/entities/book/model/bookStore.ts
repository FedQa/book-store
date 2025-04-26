import {create} from "zustand/react";
import {Book} from "@/shared/types/book";




interface BookStore {
    books: Book[];
    setBooks(books: Book[]): void;
}

export const bookStore = create<BookStore>((set) => ({
    books: [],

    setBooks: (books) => set({books}),
}))