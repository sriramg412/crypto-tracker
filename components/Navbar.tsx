import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-white/80 dark:bg-gray-900/80
      border-b border-gray-200 dark:border-gray-700
      shadow-sm
    "
    >
      <div
        className="
        w-full
        flex items-center justify-between
        px-4 sm:px-8 lg:px-12
        py-3
      "
      >
       
        <Link
          href="/"
          className="text-xl sm:text-2xl  font-bold bg-linear-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent tracking-wide hover:scale-105  transition " >
          CoinTracker
        </Link>

       
        <div className="flex items-center gap-3">

       
          <Link
            href="/login"
            className=" px-4 py-2 text-sm font-medium  rounded-lg   text-gray-700 dark:text-gray-300  hover:bg-gray-100 dark:hover:bg-gray-800   transition ">
            Login
          </Link>

        
          <Link
            href="/signup"
            className="  px-4 py-2 text-sm font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600 transition shadow-sm  " >
            Sign Up
          </Link>

        
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}