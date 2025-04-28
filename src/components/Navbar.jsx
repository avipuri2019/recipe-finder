import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check local storage for theme preference
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? true : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
                MyRecipeApp
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
                {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                ) : (
                    <MoonIcon className="h-6 w-6" />
                )}
            </button>
        </nav>
    );
};

export default Navbar;
