import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const Book = ({book}) => {

    const {deleteBook} = useContext(GlobalContext);

    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.pages}</td>
            <td>
                <button className="btn btn-danger" onClick={() => (deleteBook(book.id))}>X</button>
            </td>
        </tr>
    )
}