import { createSlice } from "@reduxjs/toolkit"


let initialState = { FavoritesArray:[] , detailsString:'' }


let favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        
        addToFavoriteArray: (state,action)=>{
            state.FavoritesArray=[...action.payload]
        },
        setDetailsString: (state,action)=>{
            state.detailsString=action.payload
        }

    }
    
})

export let favoritesReducer = favoriteSlice.reducer
export let { addToFavoriteArray , setDetailsString } = favoriteSlice.actions