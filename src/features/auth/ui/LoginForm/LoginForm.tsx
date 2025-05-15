"use client";

import axios from "axios";
import {redirect} from "next/navigation";
import {debounce} from "@/shared/lib/debounce";
import {loadingStore} from "@/shared/model/loadingStore";


export const LoginForm = () => {
    const setIsLoading = loadingStore((state) => state.setIsLoading);

    const handleLogin = async (e:any) => {
        try {
            setIsLoading(true);
            const url = "https://6810687c27f2fdac24113e5a.mockapi.io/users";
            const formData = new FormData(e.target);

            const login = formData.get('login');
            const password = formData.get('password');

            const response = await axios.get(url);
            const users = await response.data;
            return users.some((user:any) => user.login === login && user.password === password);
        }
        catch(err) {
            console.log(err);
        }
        finally {
            await debounce(2000);
            setIsLoading(false);
        }
    }

    return (
        <section className="w-screen h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                         alt="logo"/>
                    Books searcher
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="center space-y-4 md:space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(e).then((isAuth: boolean) => {
                                console.log(isAuth);
                                isAuth && redirect("/");
                            })
                        }}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your login</label>
                                <input type="text" name="login" id="login"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="login" required
                                />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required
                                />
                            </div>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Sign in
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}