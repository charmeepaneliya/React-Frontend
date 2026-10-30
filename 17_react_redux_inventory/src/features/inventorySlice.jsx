import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      name: "phone",
      qty: 1,
      price: 100000,
      category: "electronics",
    },
  ],
};

const inventorySlice = createSlice({
  name: "inventory",

  initialState,
  reducers: {
    add: (state, action) => {
      const newProduct = {
        id: new Date().getTime(),
        ...action.payload,
      };

      state.products.push(newProduct);

      console.log("product list", [...state.products]);
    },

    edit:(state,action) => {
        const productEdit = state.products.find((p)=>p.id === action.payload.id);
    },

    deleteProduct:(state,action) => {
      const productDelete =  state.products.filter((p)=>p.id === action.payload);
    }
  },
});

export const { add ,edit, deleteProduct} = inventorySlice.actions;

export default inventorySlice.reducer;
