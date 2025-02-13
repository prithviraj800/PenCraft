import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex md:flex-row sm:flex-row gap-2 flex-col justify-between items-center md:px-10 sm:px-7 px-4 py-3 text-lg  fixed w-full backdrop-blur-lg">
      <div className="flex flex-row  gap-38 items-center md:gap-50  sm:gap-26 ">
        <Link to="/">
          <div>
            <img
              src="public\blog_img.png"
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
          <div className="bg-black text-white md:px-4 sm:px-2 px-1.5 py-1 rounded-full">
            <button>
             <p className="md:flex sm:flex hidden"> Add </p><span className="">➕</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
