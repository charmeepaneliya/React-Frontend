import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "phone",
      qty: 1,
      price: 100000,
      category: "electronics",
    },
    {
      id: 2,
      name: "Laptop",
      qty: 2,
      price: 50000,
      category: "Electronics",
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

    edit: (state, action) => {
      const editProducts = state.products.find(
        (p) => p.id === action.payload.id,
      );
      state.products = editProducts;
    },

    deleteProduct: (state, action) => {
      const productDelete = state.products.filter(
        (p) => p.id !== action.payload,
      );

      state.products = productDelete;
    },
  },
});

export const { add, edit, deleteProduct } = inventorySlice.actions;

export default inventorySlice.reducer;
