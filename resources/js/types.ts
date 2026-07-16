export interface Book {
    id: number;
    title: string;
    summary: string;
}

export interface Author {
    id: number;
    name: string;
}

export interface Review {
    id: number;
    text: string;
    book_id: number;
}