import React, { useState } from "react";
import blogAxios from "../api/blogAxios";

const Blog = () => {

    const [blogs,setBlogs] = useState([]);

    const getAllBlogs = async()=>{
    try {
        const res = await blogAxios.get("/getAllBlogs");

      console.log(res.data);
      setBlogs(res.data.blogs);
    } catch (error) {
        console.log(error);
    }
     useEffect(() => {
    getAllBlogs();
  }, []);
    }
  return (
    <>
      <h1>Welcome to Blogify</h1>
      <p>All Blogs Will Display Here</p>
         {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
      ))}
    </>
  );
};

export default Blog;
