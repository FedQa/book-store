import {create} from "zustand";
import {Book} from "@/shared/types/book";


type CartBook = Book & { quantity: number, price: number, currencyCode: string };

interface CartStore {
    cart: CartBook[],
    addToCart: (book: Book) => void,
    removeFromCart: (book: Book) => void,
    incrementQuantity: (book: Book) => void,
    decrementQuantity: (book: Book) => void,
    clearCart: () => void,
}

export const cartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (book: Book) => set(state => {
        const existing = state.cart.find(item => item.id === book.id);
        if (existing) {
            return {
                cart: state.cart.map((item) => {
                    return item.id === book.id ? {...item, quantity: item.quantity + 1} : item;
                }),
            }
        }

        console.log(state.cart);

        const price = book.saleInfo?.listPrice?.amount ? book.saleInfo?.listPrice?.amount : Math.floor(Math.random() * 1501);
        const currencyCode = book.saleInfo?.listPrice?.currencyCode ? book.saleInfo?.listPrice?.currencyCode : "RUB";


        return {
            cart: [...state.cart, {...book, quantity: 1, price, currencyCode}]
        }
    }),

    removeFromCart: (book: Book) => set(state => ({
        cart: state.cart.filter((item: Book) => item.id !== book.id),
    })),

    incrementQuantity: (book: Book) => set(state => ({
        cart: state.cart.map(item => item.id === book.id ?
            {...item, quantity: item.quantity + 1}
            : item),
    })),

    decrementQuantity: (book: Book) => set(state => ({
        cart: state.cart.map(item => item.id === book.id && item.quantity > 0 ?
            {...item, quantity: item.quantity - 1}
            : item),
    })),

    clearCart: () => set({ cart: [] }),
}))