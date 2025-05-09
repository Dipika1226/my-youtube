
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
// import { cacheResults, setQuery } from '../utils/searchSlice';
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     // const searchCache = useSelector((store) => store.search.cache);
//     const { cache} = useSelector((store) => store.search);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const toggleMenuHandler = () => {
//         dispatch(toggleMenu());
//     };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (cache[searchQuery]) {
//                 setSuggestions(cache[searchQuery]);
//             } else if (searchQuery) {
//                 getSuggestions();
//             }
//         }, 200);

//         return () => {
//             clearTimeout(timer);
//         };
//     }, [searchQuery]);

//     const getSuggestions = async () => {
//         const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
//         const response = await data.json();
//         setSuggestions(response[1]);
//         dispatch(cacheResults({
//             [searchQuery]: response[1]
//         }));
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setSearchQuery(suggestion)
//         dispatch(setQuery(suggestion));
//         setShowSuggestions(false);
//         navigate(`/search?query=${encodeURIComponent(suggestion)}`);
//         console.log('Submitted query:', suggestion);
//     };

//     const handleInputBlur = () => {
//         // Delay hiding the suggestions to allow click events on suggestions
//         setTimeout(() => setShowSuggestions(false), 1500);
//     };

//     return (
//         <div className="grid grid-flow-col shadow-lg p-4 h-24">
//             <div className="col-span-2 flex">
//                 <img
//                     alt="options"
//                     src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
//                     className="w-10 h-10 m-3 cursor-pointer"
//                     onClick={toggleMenuHandler}
//                 />
//                 <a href="/">
//                     <img
//                         alt="logo"
//                         src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-128.png"
//                         className="mt-[-41px]"
//                     />
//                 </a>
//             </div>
//             <div className="col-span-8">
//                 <form className="flex" onSubmit={(e) => {
//                     e.preventDefault();
//                     dispatch(setQuery(searchQuery));
//                     navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
//                     // dispatch(setSearchQuery(""));
//                 }}>
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="border border-gray-800 rounded-l-full w-[75%] h-14 text-xl px-4"
//                         onFocus={() => setShowSuggestions(true)}
//                         onBlur={handleInputBlur}
//                     />
//                     <button className="border border-gray-800 rounded-r-full bg-gray-800 px-3">
//                         <img
//                             alt="search-icon"
//                             src="https://img.icons8.com/?size=100&id=82712&format=png&color=FFFFFF"
//                             className="w-9 h-9"
//                         />
//                     </button>
//                     <button className="bg-gray-800 rounded-full w-12 h-12 ml-4 mt-1">
//                         <img
//                             alt="speak"
//                             src="https://img.icons8.com/?size=100&id=3422&format=png&color=FFFFFF"
//                             className="w-10 h-10 pl-2 py-1"
//                         />
//                     </button>
//                 </form>
//                 {showSuggestions && (
//                     <div className="bg-white h-auto w-[50%] fixed rounded-lg shadow-2xl px-4 ml-4 mt-2 py-2 text-lg z-50">
//                         <ul>
//                             {suggestions.map((s) => (
//                                 <li
//                                     key={s}
//                                     className="py-2 px-1 hover:bg-gray-200 flex gap-2 cursor-pointer"
//                                     onClick={() => handleSuggestionClick(s)}
//                                 >
//                                     <img
//                                         alt="search-icon"
//                                         src="https://img.icons8.com/?size=100&id=82712&format=png&color=000000"
//                                         className="w-5 h-5 m-1"
//                                     />
//                                     {s}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <div className="col-span-1 flex mr-[-90px]">
//                 <img
//                     alt="notifications"
//                     src="https://img.icons8.com/?size=100&id=ZW2vgTIQ1bkh&format=png&color=000000"
//                     className="w-10 h-10 m-3"
//                 />
//                 <img
//                     alt="default-user"
//                     src="https://img.icons8.com/?size=100&id=11795&format=png&color=1A1A1A"
//                     className="w-10 h-10 m-3"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Header;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { cacheResults, setQuery } from '../utils/searchSlice';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const { cache } = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenuHandler = () => dispatch(toggleMenu());

    useEffect(() => {
        if (!searchQuery) return;
        const timer = setTimeout(() => {
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery]);
            } else {
                fetchSuggestions();
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const fetchSuggestions = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
            const response = await data.json();
            setSuggestions(response[1]);
            dispatch(cacheResults({ [searchQuery]: response[1] }));
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        navigateToSearch(suggestion);
    };

    const navigateToSearch = (query) => {
        if (!query.trim()) return;
        dispatch(setQuery(query));
        navigate(`/search?query=${encodeURIComponent(query)}`);
        // setSearchQuery('');
    };

    const handleInputBlur = () => {
        // Delay hiding the suggestions to allow click events on suggestions
        setTimeout(() => setShowSuggestions(false), 1500);
    };

    return (
        <div className="grid grid-flow-col shadow-lg p-4 h-20">
            <div className="col-span-2 flex">
                <img
                    alt="menu"
                    src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
                    className="w-8 h-8 m-3 cursor-pointer"
                    onClick={toggleMenuHandler}
                    aria-label="Toggle Menu"
                />
                <a href="/">
                    <img
                        alt="logo"
                        src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-128.png"
                        className="mt-[-38px]"
                        aria-label="YouTube Home"
                    />
                </a>
            </div>
            <div className="col-span-8">
                <form
                    className="flex pt-1"
                    onSubmit={(e) => {
                        e.preventDefault();
                        navigateToSearch(searchQuery);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-800 rounded-l-full w-[75%] h-11 text-md px-4"
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => handleInputBlur()}
                        aria-label="Search Input"
                    />
                    <button
                        type="submit"
                        className="border border-gray-800 rounded-r-full bg-gray-800 px-3"
                        aria-label="Search"
                    >
                        <img
                            alt="search-icon"
                            src="https://img.icons8.com/?size=100&id=82712&format=png&color=FFFFFF"
                            className="w-8 h-8"
                        />
                    </button>

                </form>
                {showSuggestions && suggestions.length > 0 && (
                    <div className="bg-white h-auto w-[50%] fixed rounded-lg shadow-2xl px-4 ml-4 mt-2 py-2 text-md z-50">
                        <ul>
                            {suggestions.map((s) => (
                                <li
                                    key={s}
                                    className="py-1 px-1 hover:bg-gray-200 flex gap-2 cursor-pointer"
                                    onClick={() => handleSuggestionClick(s)}
                                >
                                    <img
                                        alt="search-icon"
                                        src="https://img.icons8.com/?size=100&id=82712&format=png&color=000000"
                                        className="w-5 h-5 m-1"
                                    />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1 flex -mr-14">
                <img
                    alt="notifications"
                    src="https://img.icons8.com/?size=100&id=ZW2vgTIQ1bkh&format=png&color=000000"
                    className="w-8 h-8 m-3"
                    aria-label="Notifications"
                />
                <img
                    alt="default-user"
                    src="https://img.icons8.com/?size=100&id=11795&format=png&color=1A1A1A"
                    className="w-8 h-8 m-3"
                    aria-label="User Profile"
                />
            </div>
        </div>
    );
};

export default Header;
