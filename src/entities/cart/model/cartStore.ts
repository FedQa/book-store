import {create} from "zustand";
import {Book} from "@/shared/types/book";


interface CartStore {
    cart: Book[],
    addToCart: (book: Book) => void,
    removeFromCart: (book: Book) => void,
    clearCart: () => void,
}

export const cartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (book: Book) => set(state => ({
        cart: [...state.cart, book]
    })),

    removeFromCart: (book: Book) => set(state => ({
        cart: state.cart.filter((item: Book) => item.id !== book.id),
    })),

    clearCart: () => set({ cart: [] }),


}))