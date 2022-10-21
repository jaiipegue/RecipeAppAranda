import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    name: string
    queryParams: string

}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState : {
        name: "Home",
        queryParams: "dessert"

    } as initialStateType,
    reducers: {
        selectTypeFoodReducer: (state, {payload}) => {
            state.name = payload.name;
            state.queryParams = payload.queryParams;
        },
      
    },
});

// Action creators are generated for each case reducer function
export const {
    selectTypeFoodReducer,
} = recipeSlice.actions;