import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constants";
import { closeMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";


const SearchResultsPage = () => {
    const { query } = useSelector((store) => store.search);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (query) {
            // dispatch(closeMenu());
            fetchSearchResults();
        }
    }, [query]);

    const fetchSearchResults = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}&type=video`);

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(`API Error: ${data.error.message}`);
            }
            console.log(data.items)
            setResults(data.items);
            setError(null); // Clear error if successful
        } catch (err) {
            setError(err.message); // Set the error message
            setResults([]); // Clear previous results
        }
    };

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="p-6  border border-green-100 rounded-lg shadow-md max-w-md text-center">
                    <h2 className="text-xl font-bold text-black">Oops! Something went wrong</h2>
                    <p className="mt-2 text-gray-800">{error}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-600"
                        onClick={() => setError(null)} // Reset the error and try again
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className=" mt-4">
            {results && results.length > 0 ? results.map((item) => (<Link to={"/watch?v=" + item.id.videoId} key={item.id.channelId || item.id.videoId}> <SearchResults {...item} /></Link>
            )) : (<div className="text-gray-500 text-2xl">No results found for "{query}".</div>)
            }
        </div >
    );
};

export default SearchResultsPage;
