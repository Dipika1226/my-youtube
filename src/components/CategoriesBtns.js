import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOCATEGORIES_API } from '../utils/constants';
const CategoriesBtns = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, [])
    const getCategories = async () => {
        const data = await fetch(YOUTUBE_VIDEOCATEGORIES_API);
        const response = await data.json();
        console.log(response.items);
        setCategories(response.items);
    }
    return (
        <div>
            {categories.map((category) => (
                <button key={category.id} className='px-4 py-2 m-4 bg-gray-300 rounded-lg text-xl font-semibold'>{category.snippet.title}</button>
            ))}
        </div >
    )
}

export default CategoriesBtns