import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "cloths",
      category: "fashion",
      qty: "5",
      price: "5000",
    },
    {
      id: 2,
      name: "Phone",
      category: "electronic",
      qty: "1",
      price: "50000",
    },
  ],
  editval: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    add: (state, action) => {
      const newProducts = {
        id: new Date().getTime(),
        ...state.products,
      };

      state.products.push(action.payload);

      console.log("products", [...state.products]);
      console.log("newProduct", newProducts);
    },

    setEditVal: (state, action) => {
      state.products = state.products.find((p) => p.id === action.payload);
      
    },

    handleEdit:(state,action)=>{
      const index = state.products.findIndex((p)=>p.id === action.editval.id)

      if(index !== -1){
        state.products[index] = action.payload
      }
      state.editval = null;
    },

    handleDelete: (state, action) => {
      const index = state.products.findIndex((p)=>p.id === action.payload);

      if(index !== -1){
        state.products.splice(index,1);
      }
    },
  },
});

export const { add, setEditVal, handleEdit, handleDelete } =
  inventorySlice.actions;

export default inventorySlice.reducer;
