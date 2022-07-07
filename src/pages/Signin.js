import react from "react";
import BrandIcon from "../components/BrandIcon";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=''>
      <div className='flex items-center justify-center'>
        <div className=''>
          <BrandIcon />
        </div>
        <div className='absolute bg-slate-600 h-96 w-96 opacity-70 rounded-lg top-72'></div>
        <h3 className='absolute top-80  mb-10 font-bold dark:text-light'>
          Sign In
        </h3>
        <Link to='/'>
          <button
            type='button'
            className='flex items-center bottom-80  text-slate-700  bg-gradient-to-r from-[#69C9FF] to-[#00DACC] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-20 py-2 text-center'>
            <svg
              className='w-6 h-6 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
            </svg>{" "}
            Explore Now
          </button>
        </Link>
        <div className='absolute flex justify-center bottom-72'>
          <div className='text-gray-600 mr-1'>Don’t have account?</div>
          <div className='text-cyan-400'>
            <Link to='/'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
