import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder }) => (
    <input 
        className = "search"
        type="search" 
        placeholder={ placeholder, handleChange } 
        onChange={handleChange}
        />
)