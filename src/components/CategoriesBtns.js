import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOCATEGORIES_API } from '../utils/constants';

const CategoriesBtns = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOCATEGORIES_API);
            const response = await data.json();
            setCategories(response.items || []);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    return (
        <div className="flex flex-wrap">
            {categories.slice(0, 10).map((category) => (
                <button
                    key={category.id}
                    className="px-4 py-2 m-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm font-medium"
                >
                    {category.snippet.title}
                </button>
            ))}
        </div>
    );
};

export default CategoriesBtns;
