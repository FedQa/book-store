import {create} from "zustand";
import {Book} from "@/shared/types/book";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";


type CartBook = Book & { quantity: number, price: number, currencyCode: string };

interface CartStore {
    cart: CartBook[],
    addToCart: (book: Book) => void,
    removeFromCart: (book: Book) => void,
    incrementQuantity: (book: Book) => void,
    decrementQuantity: (book: Book) => void,
    clearCart: () => void,
}

export const cartStore = create<CartStore>()(persist(immer((set) => ({
    cart: [],

    addToCart: (book: Book) =>
        set((state) => {
        const existing = state.cart.find(item => item.id === book.id);
        if (existing) {
            existing.quantity += 1;
        }
        else {
            const price = book.saleInfo?.listPrice?.amount ? book.saleInfo?.listPrice?.amount : Math.floor(Math.random() * 1501);
            const currencyCode = book.saleInfo?.listPrice?.currencyCode ? book.saleInfo?.listPrice?.currencyCode : "RUB";
            state.cart.push({...book, quantity: 1, price, currencyCode});
        }
    }),

    removeFromCart: (book: Book) => set((state) => {
        state.cart = state.cart.filter(item => item.id !== book.id);
    }),

    incrementQuantity: (book: Book) => set((state) => {
        const item = state.cart.find(item => item.id === book.id);
        if (item) {
            item.quantity +=1;
        }
    }),

    decrementQuantity: (book: Book) => set((state) => {
        const item = state.cart.find(item => item.id === book.id && item.quantity > 0);
        if (item) {
            item.quantity -= 1;
        }
    }),

    clearCart: () => set({ cart: [] }),
})), {name: "cartStore"}))