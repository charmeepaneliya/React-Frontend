import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditVal, handleDelete } from "../features/inventorySlice";

const List = () => {
  const { products, editVal } = useSelector((state) => state.inventory);
  console.log("Selected Product:", editVal);
  const [inputQuery, setInputQuery] = useState({
    name: "",
    sorting: "",
  });
  const dispatch = useDispatch();

  const handleChange = (field, e) => {
    setInputQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("inputQuery", inputQuery);
  };

  const handleReset = () => {
    setInputQuery({
      name: "",
      sorting: "asc",
    });
  };

  const filterList = products.filter((p)=>p.name.toLowerCase().includes(inputQuery.name.toLocaleLowerCase()));

  const sortList = [...filterList].sort((a,b)=>{
    if(inputQuery.sorting === "asc"){
      return a.id - b.id;
    }if(inputQuery.sorting === "desc"){
      return b.id - a.id
    }
    if(inputQuery.sorting === "priceAsc"){
      return Number(a.price) - Number(b.price)
    }
    if(inputQuery.sorting === "priceDesc"){
      return Number(b.price) - Number(a.price)
    }
  })

  return (
    <>
      <form>
        <h2>Product Query</h2>
        <input
          type="text"
          value={inputQuery.name}
          placeholder="Enter Product Name"
          onChange={(e) => handleChange("name", e)}
        />
        <select
          typ="text"
          value={inputQuery.sorting}
          onChange={(e) => handleChange("sorting", e)}
        >
          <option value="asc" selected>
            Ascending
          </option>
          <option value="desc">Descending</option>
          <option value="priceAsc">Price Ascending</option>
          <option value="priceDesc">Price Descending</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
        <button type="button" onClick={handleReset}>clear all filter</button>
      </form>
      <br />
      <br />
      <h1>Product List</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Category</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortList.map((p, index) => {
            return (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.qty}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button onClick={() => dispatch(setEditVal(p.id))}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(handleDelete(p.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
