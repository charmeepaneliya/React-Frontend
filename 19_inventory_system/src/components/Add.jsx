import { useEffect, useState } from "react";
import { add,handleEdit} from "../featurse/inventorySlice";
import { useDispatch, useSelector } from "react-redux";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    category: "",
    qty: "",
    price: "",
  });
  const { editVal } = useSelector((state) => state.inventory);
  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const dispatch = useDispatch();
  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.name || !input.category || !input.qty || !input.price){
      return alert("all data required")
    }
    if(editVal){
      dispatch(handleEdit(input));
    }else{
      dispatch(add(input))
    }
   
    setInput({
      name: "",
      category: "",
      qty: "",
      price: "",
    });
  };
  console.log("input", input);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />
        <br />
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        />
        <br />
        <br />
        <label htmlFor="qty">Qty</label>
        <input
          type="number"
          value={input.qty}
          onChange={(e) => handleChange("qty", e)}
        />
        <br />
        <br />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={input.price}
          onChange={(e) => handleChange("price", e)}
        />
        <br />
        <br />

        <button type="submut">{editVal ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Add;
