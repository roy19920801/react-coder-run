import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {language:'',content:''}; 
const compilerSlice = createSlice({
    name: 'compiler',
    initialState,
    reducers: {
        setLanguage: (state,action) => {
            return {...state,language: action.payload};
        },
        setCodeContent: (state,action) => {
            return {...state,content:action.payload}
        }
    }
});

const {reducer,actions} = compilerSlice;
export const {setLanguage,setCodeContent} = actions;
export default reducer;