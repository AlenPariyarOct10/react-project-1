import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="main-body">
      <b>Blog</b>
      {blogs.map((item) => (
        <div className="dark:bg-gray-100 dark:text-gray-800" key={item.id}>
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-600">{new Date(item.updatedAt).getFullYear()}</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                {item.category.name}
              </a>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                {item.title}
              </a>
              <p className="mt-2">{item.body}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Read more
              </a>
              <div>
                <a rel="noopener noreferrer" href="#" className="flex items-center">
                  <img
                    src={item.images[0]}
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
               
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
