import React, { useEffect, useState } from "react";
import blogAxios from "../api/blogAxios";
import { useNavigate } from "react-router-dom";

const Blog = () => {

  const navigate = useNavigate();

    const [blogs,setBlogs] = useState([]);


    const getAllBlogs = async()=>{
    try {
        const res = await blogAxios.get("/getAllBlogs");

      console.log(res.data);
      setBlogs(res.data.blogs);
    } catch (error) {
        console.log(error);
    }
    
    }

     useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete = async (id) =>{
    try {
      const res = await blogAxios.delete(`/${id}`);

      console.log(res.data);

      getAllBlogs();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Welcome to Blogify</h1>
      <p>All Blogs Will Display Here</p>
         {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <p>{blog.category}</p>
          {blog.image && (
            <img src={blog.image} alt={blog.title} width="200"/>
          )}

          <button  onClick={()=>navigate(`/update/${blog._id}`)} >Edit</button>
          <button onClick={()=>handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Blog;
