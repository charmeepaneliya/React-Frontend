import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk("product/getAllproducts",async ()=>{
    const res = await fetch("https://fakestoreapi.com/products")

    if(!res.ok){
        throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return data;
})

export default fetchProduct;