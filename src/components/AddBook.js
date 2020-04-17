import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddBook = () => {

    const [name, setName] = useState('')
    const [pages, setPages] = useState(0);

    const {AddBook} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const book = {
            id: Math.floor(Math.random() * 10000),
            name,
            pages: +pages
        }

        AddBook(book);
    }

    return(
        <div className="container addBook-form">
            <h2>Add Book</h2>
            <div className="row justify-content-md-center">
                <form onSubmit={onSubmit} className="col-lg-6 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="bookName">Book Name</label>
                        <input
                            type="text"
                            id="bookName"
                            placeholder="Enter Book Name..."
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookPages">Book Pages</label>
                        <input                        
                            type="number"
                            id="bookPages"
                            placeholder="Enter Book Pages..."
                            className="form-control"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-info">Add Book</button>
                </form>
            </div>
        </div>
    )
}