type BooksQueryProps = {
    query: string;
    startIndex?: number;
    maxResults?: number;
}

export const getBooks = (props: BooksQueryProps) => {
    const {query, startIndex = 0, maxResults = 10} = props;
    return `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyCb02oH6jcaRnMaw-_YOzFY82CbO7mQWIg`;
}