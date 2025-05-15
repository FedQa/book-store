"use client";

import {SearchPage} from "@/pages/SearchPage/SearchPage";
import {loadingStore} from "@/shared/model/loadingStore";
import Loader from "@/shared/ui/Loader/Loader";

export default function Home() {
    const isLoading = loadingStore((state) => state.isLoading);

    return (
        <>
            {isLoading ? <Loader/> : <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-bold">📚 Welcome to Book Store</h1>
                    <p>Use the search bar to find your next favorite book.</p>
                </div>
                <SearchPage/>
            </div>
            }
        </>
    );
}
