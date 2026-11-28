import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogAxios from "../api/blogAxios";

const AddBlog = () => {
  const navigate = useNavigate();

  const [blogData, setBlogdata] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  //handle input cahnge
  const handleChange = (field, e) => {
    setBlogdata((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleImage = (e) => {
    setBlogdata({
      ...blogData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("title", blogData.title);
  formData.append("description", blogData.description);
  formData.append("category", blogData.category);

  if (blogData.image) {
    formData.append("image", blogData.image);
  }

  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const response = await blogAxios.post("/blogAdd", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);

    alert("Blog added successfully!");

    navigate("/");
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Failed to add blog");
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <div className="container mt-4">
        <h2>Add new blog</h2>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={(e) => handleChange("title", e)}
          />
          <br />
          <br />
          <label>Description</label>
          <textarea
            name="description"
            value={blogData.description}
            onChange={(e) => handleChange("description", e)}
          />
          <br />
          <br />
          <label>Category</label>
          <input
            name="category"
            value={blogData.category}
            onChange={(e) => handleChange("category", e)}
          />
          <br />
          <br />

          <label>Image</label>
          <input
            type="file"
            name="image"
            accept= "image/*"
            onChange={handleImage}
          />
          <br />
          <br />

          <button type="submit" disabled={loading}>
            {" "}
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
