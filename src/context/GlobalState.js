import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const InitialState = {
    books: [
        {id: 1, name: '1984', pages: '350'},
        {id: 2, name: 'Yabancı', pages: '100'},
        {id: 3, name: 'Palto', pages: '80'}
    ]
}

// create context
export const GlobalContext = createContext(InitialState);

// provide component
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // actions 
    function deleteBook(id) {
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        });
    }

    function AddBook(book) {
        dispatch({
            type: 'ADD_BOOK',
            payload: book
        });
    }

    return (
        <GlobalContext.Provider value= {{
            books: state.books,
            deleteBook,
            AddBook
        }}>
            {children}
        </GlobalContext.Provider>
    )

}