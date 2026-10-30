import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {edit, deleteProduct} from "../features/inventorySlice";

const List = () => {
  const { products } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  return (
    <>
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
          {products.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.qty}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() =>dispatch(edit(p.id))}>Edit</button>
              </td>
              <td>
                <button onClick={() =>dispatch(deleteProduct(p.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
