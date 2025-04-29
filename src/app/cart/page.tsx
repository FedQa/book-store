"use client";

import {cartStore} from "@/entities/cart/model/cartStore";
import {Book} from "@/shared/types/book";
import {BookCard} from "@/entities/book/ui/BookCard";


export default function CartPage(){
    const booksInCart = cartStore(state => state.cart);
    console.log(booksInCart);
    console.log("caaart");
    return (
        <div>
            {booksInCart &&
                booksInCart.length > 0 &&
                booksInCart.map((book:Book) => {
                    return (
                        <BookCard book={book} key={book.id} />
                    )
                })
            }
        </div>
    )
}