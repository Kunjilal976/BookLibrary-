// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './Bookcard';

const BookSearch = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        const q = e.target.value;
        setQuery(q);
        if (q.length > 0) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search for a book" 
                value={query} 
                onChange={handleSearch}
            />
            <div className="results">
                {results.map(book => (
                    <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
        </div>
    );
}

export default BookSearch;
