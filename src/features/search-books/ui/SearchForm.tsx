"use client";

import axios from "axios";
import {getBooks} from "@/shared/config/api";
import {useState} from "react";


export const SearchForm = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = async() => {
        try {
            const response = await axios.get(getBooks({
                query: inputValue,
                maxResults: 15,
            }));

            const books = await response.data;
            console.log(books);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            className="flex gap-4"
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <div>
                <label htmlFor="author"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <input type="text" id="author"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="author" required/>
            </div>
            <button className="medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Submit
            </button>
        </form>
    )
}