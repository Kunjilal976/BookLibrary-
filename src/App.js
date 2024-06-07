import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
        if (storedBookshelf) {
            setBookshelf(storedBookshelf);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }, [bookshelf]);

    const addToBookshelf = (book) => {
        setBookshelf([...bookshelf, book]);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />
                <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
            </Routes>
        </Router>
    );
}

export default App;
