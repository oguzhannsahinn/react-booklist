import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Header} from './components/Header'
import { Books } from './components/Books';

import {GlobalProvider} from './context/GlobalState'
import { AddBook } from './components/AddBook';

function App() {
  return (
    <GlobalProvider>
      <div className="mt-4 container col-12 text-center">
        <Header />
        <Books />
        <AddBook />
      </div>  
    </GlobalProvider>
  );
}

export default App;
