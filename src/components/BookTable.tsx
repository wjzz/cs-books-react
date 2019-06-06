import React from "react";
import { BookData } from "./Books";
import BookItem from "./BookItem";

interface Props {
    books: BookData[];
    toggleRead(index: number): void;
}

const BookTable: React.FC<Props> = (props: Props) => {
    
    const book_items = props.books.map((book) => 
        <BookItem 
            key={book.index}
            info={book} 
            toggleRead={props.toggleRead}
        />
    );

    return (
        <table>
            <thead>
                <tr>
                    <td>Cover</td>
                    <td>Info</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {book_items}
            </tbody>
        </table>
    );
};

export default BookTable; 