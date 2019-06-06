import React from "react";

import BookTable from "./BookTable";
import {BookData} from "./Books";
import BookListSummary from "./BookListSummary";

interface Props {
    books: BookData[];
    toggleRead(index: number): void;
    toggleAll(intoRead: boolean): void;
    sortByTitle(): void;
    sortByKey(): void;
}

const BookList: React.FC<Props> = (props: Props) => {

    return (
        <>
            <BookTable 
                books={props.books}
                toggleRead={props.toggleRead} 
            />
            <BookListSummary 
                books={props.books}
                toggleAll={props.toggleAll}
                sortByKey={props.sortByKey}
                sortByTitle={props.sortByTitle}
            />
        </>
    );
};

export default BookList; 