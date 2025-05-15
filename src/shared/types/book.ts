

export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        pageCount: number;
        categories: string[];
        language: string;
        imageLinks?: {
            thumbnail: string;
        }
    };
    saleInfo?: {
        country: string;
        listPrice: {
            amount: number;
            currencyCode: string;
            //quantity: number;
        }
    }
}