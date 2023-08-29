import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer  } from "./Slices/FavoriteSlice";

export let store = configureStore({
    reducer:{
        favoriteItems:favoritesReducer,
        detailsItem: favoritesReducer
    }
})