import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        cache: {},
        query: ''
    },
    reducers: {
        cacheResults: (state, action) => {
            state.cache = Object.assign(state.cache, action.payload);
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
})
export const { cacheResults, setQuery } = searchSlice.actions;
export default searchSlice.reducer;