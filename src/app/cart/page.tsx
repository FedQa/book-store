"use client";

import {cartStore} from "@/entities/cart/model/cartStore";
import {Typography} from "antd";
import {useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";
import Link from "next/link";


export default function CartPage(){
    const booksInCart = cartStore(state => state.cart);
    const removeFromCart = cartStore(state => state.removeFromCart);
    const clearCart = cartStore(state => state.clearCart);

    const incrementQuantity = cartStore(state => state.incrementQuantity);
    const decrementQuantity = cartStore(state => state.decrementQuantity);
    //const quantity = cartStore(state => state.quantity);


    const [savings] = useState(Math.floor(Math.random() * 801));
    let storePickup = 1250;
    let tax = 99;
    let cartSum = booksInCart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0)
    let finalPrice = cartSum + tax + storePickup - savings;

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-screen">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    Shopping Cart
                </h2>

                {booksInCart && booksInCart.length > 0 ? <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {booksInCart && booksInCart.length > 0 &&
                                booksInCart.map((book) => (
                                    <div key={book.id}
                                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div
                                            className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href="#" className="shrink-0 md:order-1">
                                                <img className="hidden h-30 w-30 dark:block"
                                                     src={book.volumeInfo.imageLinks?.thumbnail}
                                                     alt="imac image"/>
                                            </a>

                                            <label htmlFor="counter-input" className="sr-only">Choose
                                                quantity:</label>
                                            <div
                                                className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button type="button" id="decrement-button"
                                                            data-input-counter-decrement="counter-input"
                                                            onClick={() => decrementQuantity(book)}
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                  strokeLinejoin="round" strokeWidth="2"
                                                                  d="M1 1h16"/>
                                                        </svg>
                                                    </button>
                                                    <input type="text" id="counter-input" data-input-counter
                                                           className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                           placeholder="" value={book.quantity} readOnly required/>
                                                    <button type="button" id="increment-button"
                                                            onClick={() => incrementQuantity(book)}
                                                            data-input-counter-increment="counter-input"
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                  strokeLinejoin="round" strokeWidth="2"
                                                                  d="M9 1v16M1 9h16"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">
                                                        {book.price} {book.currencyCode}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a href="#"
                                                   className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                                                    {book.volumeInfo.title}
                                                </a>

                                                <Typography.Text ellipsis={true}
                                                                 style={{color: "white"}}
                                                                 className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                >
                                                    {book.volumeInfo.description}
                                                </Typography.Text>

                                                <div className="flex items-center gap-4">
                                                    <button type="button"
                                                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" width="24"
                                                             height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                  strokeLinejoin="round" strokeWidth="2"
                                                                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                        </svg>
                                                        Add to Favorites
                                                    </button>

                                                    <button type="button"
                                                            onClick={() => removeFromCart(book)}
                                                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                        <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" width="24"
                                                             height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                  strokeLinejoin="round" strokeWidth="2"
                                                                  d="M6 18 17.94 6M18 18 6.06 6"/>
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full text-center">
                            <div
                                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order
                                    summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original
                                                price
                                            </dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{Math.ceil(cartSum)} ₽</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-600">{savings} ₽</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store
                                                Pickup
                                            </dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{storePickup} ₽</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{tax} ₽</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">{Math.ceil(finalPrice)} ₽</dd>
                                    </dl>
                                </div>

                                <a href="#"
                                   className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                                    to Checkout</a>

                                <div className="flex items-center justify-center gap-2">
                                                <span
                                                    className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link href="/books" title=""
                                       className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round"
                                                  strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                                onClick={clearCart}
                            >
                                <div
                                    className="flex gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    <DeleteOutlined/>
                                    <p>Clear cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    : <p style={{width: "100%"}}>No books here yet...</p>
                }
            </div>
        </section>
    )
}