import { useDispatch, useSelector } from "react-redux";
import { setEditVal, handleDelete } from "../featurse/inventorySlice";
import { useState } from "react";

const List = () => {
  const { products, editVal } = useSelector((state) => state.inventory);

  console.log("selected product", editVal);

  const dispatch = useDispatch();

  // const [query, setQuery] = useState({
  //   name: "",
  //   sorting: "",
  // });
  // const handleChange = (field, e) => {
  //   setQuery((prev) => {
  //     return {
  //       ...prev,
  //       [field]: e.target.value,
  //     };
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleReset = () =>{
  //   setQuery({
  //     name: "",
  //   sorting: "Aesending",
  //   })
  // }

  // const filterList = products.filter((p)=>p.name.toLowerCase().includes(setQuery.name.toLocaleLowerCase()));

  

  // console.log("filterList",filterList);
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query.name}
          placeholder="Enter Name"
          onChange={(e) => handleChange("name", e)}
        />

        <select type="text" value={query.sorting} onChange={(e) => handleChange("sorting", e)} >
          <option value="Aesending">Aesending</option>
          <option value="Desending">Descending</option>
          <option value="PriceAsending">Price Asending </option>
          <option value="PriceDesending">Price Desending </option>
        </select>

        <button onClick={handleSubmit}>Search</button>
        <button onClick={handleReset}>clear all filter</button>
      </form> */}
      <br/><br/>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Price</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return (
              <tr key={p.id}>
                <th>{index + 1}</th>
                <th>{p.name}</th>
                <th>{p.category}</th>
                <th>{p.qty}</th>
                <th>{p.price}</th>
                <th>
                  <button onClick={() => dispatch(setEditVal(p.id))}>
                    Edit
                  </button>
                </th>
                <th>
                  <button onClick={() => dispatch(handleDelete(p.id))}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
