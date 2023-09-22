import Link from "next/link";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex cursor-pointer items-center flex-shrink-0 text-gray-800 mr-16">
            <Link href="/">
              <span className="font-semibold text-xl tracking-tight">
                E - Commerce
              </span>
            </Link>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <SearchBar />
          <div className="flex text-md font-bold text-blue-700 ">
            <Link href="/cart">
              <a className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                Cart
              </a>
            </Link>
            <Link href="/wishlist">
              <a className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                Wishlists
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
