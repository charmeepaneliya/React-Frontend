import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogAxios from "../api/blogAxios";

const UpdateBlog = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [oldImage, setOldImage] = useState("");

  const getBlogById = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await blogAxios.get(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      const blog = res.data.blog;

      setBlogData({
        title: blog.title,
        description: blog.description,
        category: blog.category,
        image: null,
      });

      setOldImage(blog.image);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  useEffect(() => {
    getBlogById();
  }, [id]);

  const handleChange = (field, e) => {
    setBlogData((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleImage = (e) => {
    setBlogData((prev) => {
      return {
        ...prev,
        image: e.target.files[0],
      };
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

      const res = await blogAxios.patch(`/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);

      alert("Blog Updated successfully!");

      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to update blog");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container mt-4">
        <h2>Update Blog</h2>

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

          <label>Old Image</label>
          {oldImage && (
            <img src={oldImage} alt="current blog" width="150"/>
          )}
          <br />
          <br />

          <label>Change Image</label>
          <input type="file" accept="image/*" onChange={handleImage}/>
          <br/>
          <br/>

          <button type="submit" disabled={loading}>{loading ? "Updatting...":"Update Blog"}</button>

        </form>
      </div>
    </>
  );
};

export default UpdateBlog;
