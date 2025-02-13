import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fatchdata() {
      const respons = await axios.get("http://localhost:4000/api/blogs");
      setBlogs(respons.data.blogs);
    }
    fatchdata();
  }, []);

  async function deleteBlog(id) {
    const response = await axios.post(
      `http://localhost:4000/api/blogs/delete/${id}`
    );
    console.log(response);
    location.reload;
  }
  return (
    <div className="py-25 h-screen bg-gradient-to-b to-zinc-900  from-gray-300">
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5 ">
        {blogs.map((item, index) => (
          <div className=" p-4 rounded-xl bg-white" key={index}>
            <div className="flex flex-col gap-4">
              <p>{item.name}</p>
              <img src={item.image} alt="" />
              <h2>{item.discription}</h2>
              <div className="flex justify-between">
                <small>{item.username}</small>
                <small className="text-sm">{item.created_at}</small>
              </div>
              <button
                type="button"
                className="bg-red-600 rounded-md p-1 w-[10rem]"
                onClick={() => deleteBlog(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
