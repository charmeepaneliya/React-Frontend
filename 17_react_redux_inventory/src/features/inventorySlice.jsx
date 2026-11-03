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
  editVal: null,
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

    setEditVal: (state, action) => {
      const editProducts = state.products.find((p) => p.id === action.payload);
      state.editVal = editProducts;
    },

    handleEdit: (state, action) => {
      const index = state.products.findIndex((p) => p.id === state.editVal.id);

      if (index !== -1) {
        state.products[index] = action.payload;
      }
      state.editVal = null;
    },

    handleDelete: (state, action) => {
      // const productDelete = state.products.filter(
      //   (p) => p.id !== action.payload,
      // );

      // state.products = productDelete;

      const index = state.products.findIndex((p) => p.id === action.payload);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const { add, setEditVal, handleDelete, handleEdit } = inventorySlice.actions;

export default inventorySlice.reducer;
