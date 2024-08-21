import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import movieSlice from "./slices/movie.slice"

const configStore = () => {
    const store = configureStore({
        reducer: {
            auth: authSlice,
            movie: movieSlice,
        }
    })
    return store
}

export default configStore;