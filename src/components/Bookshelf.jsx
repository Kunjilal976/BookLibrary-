// src/components/Bookshelf.js
import React from 'react';
import PropTypes from 'prop-types';

const Bookshelf = ({ bookshelf }) => {
    return (
        <div>
            <h2>My Bookshelf</h2>
            {bookshelf.length === 0 ? (
                <p>No books added yet.</p>
            ) : (
                <div className="bookshelf">
                    {bookshelf.map((book, index) => (
                        <div key={index} className="book-card">
                            <h3>{book.title}</h3>
                            <p>{book.author_name?.join(', ')}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
Bookshelf.propTypes = {
    bookshelf: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author_name: PropTypes.arrayOf(PropTypes.string),
        })
    ),
};

export default Bookshelf;
