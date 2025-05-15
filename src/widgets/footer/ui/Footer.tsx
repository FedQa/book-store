

export const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <span>© 2025 </span>
                    <a href="/" className="hover:underline">BooksSearcher</a>
                    <span>. All Rights Reserved.</span>
                </span>
            </div>
        </footer>
    )
}