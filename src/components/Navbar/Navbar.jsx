import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <div className="sm:mx-28">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Explore</a>
              </li>
              <li>
                <a>Collection</a>
              </li>
              <li>
                <a>Community</a>
              </li>
            </ul>
          </div>
          <a href="/" className="normal-case text-xl">
            <h1 className="font-bold text-2xl italic">Image Gallery</h1>
          </a>
          <div className="flex">
            <input
              className=" border border-gray-200 flex mx-auto rounded-sm px-1 w-64 ml-10 py-2 "
              type="text"
              placeholder="Search images here"
            />
            <button className="flex justify-center items-center bg-[#0076CE] font-semibold py-2 px-4 rounded-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Explore</a>
              </li>
              <li>
                <a>Collection</a>
              </li>
              <li>
                <a>Community</a>
              </li>

              <Toggle></Toggle>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
