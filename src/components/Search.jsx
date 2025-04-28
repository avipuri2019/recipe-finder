import React, { useState } from 'react';

const Search = ({ searchQuery }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm) {
            searchQuery(searchTerm);
        } else {
            alert('Please enter a search term!');
        }
    };

    return (

        <div className="container mx-auto my-10 w-full max-w-md flex items-center justify-center">
            <input className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 bg-white dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search Recipes..." onChange={(e) => setSearchTerm(e.target.value)} />
            <button className=" ml-4 px-12 py-4 bg-blue-500 text-white rounded-lg" onClick={handleSearch}>Search</button>


        </div>

    );
}

export default Search;