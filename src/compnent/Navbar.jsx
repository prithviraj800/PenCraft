import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex md:flex-row sm:flex-row gap-2 flex-col justify-between items-center md:px-10 sm:px-7 px-4 py-3 text-lg  fixed w-full backdrop-blur-lg">
      <div className="flex flex-row  gap-50 items-center md:gap-50  sm:gap-26 ">
        <Link to="/">
          <div>
            <img
              src="https://files.oaiusercontent.com/file-3sXsNg7uNu6ijXFMixGcMq?se=2025-02-12T17%3A15%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D78db046b-5f99-4a54-838e-06a10853b009.webp&sig=l8L7CZchudbmKVUJvuCyy1eS77LFPkAakT/6M/doq1w%3D"
              alt=""
              className="w-12 rounded-full"
            />
          </div>
        </Link>
        <div>
          <p className="font-serif font-bold">PenCraft</p>
        </div>
      </div>
      <div className="flex  md:gap-10 sm:gap-6 gap-3 items-center justify-between">
        <div>
          <input
            type="search"
            placeholder="Search "
            className="border-[1px] px-4 rounded-full"
          />
        </div>
        <Link to="/blog">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <button>
              Add <span className="">➕</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
