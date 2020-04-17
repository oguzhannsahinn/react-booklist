export default (state, action) => {
    switch(action.type){

        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        case 'ADD_BOOK':
            return {
                ...state,
                books: [action.payload, ...state.books]
            }
        default: 
            return state
    }
}