import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchApi = createAsyncThunk('productsThunk/fetchApi',
async ()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    localStorage.setItem("e-commerce",JSON.stringify(result))
    return result;
}
)