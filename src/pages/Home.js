import Header from "../components/Header";
// import bg1 from '../assets/img/bg-img.png';
import blue from "../assets/img/blue-bg.svg";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='bg-light static dark:bg-dark overflow-hidden'>
      <Header />
      {/* <img src={bg1} className="absolute right-0 top-0  " alt="illustration" /> */}
      <div className='absolute left-96 top-0 w-full h-full'>
        <Spline scene='https://prod.spline.design/yb-mucjnp8qLyV59/scene.splinecode' />
      </div>

      <img
        src={blue}
        className='absolute left-0 top-0 hidden md:block'
        alt='illustration'
      />
      <div className='z-0 absolute top-0 left-0 w-full lg:w-1/2 h-screen pt-28 bg-light dark:bg-dark dark:bg-opacity-20 bg-opacity-20 backdrop-blur-lg'></div>
      <div className='container px-3 md:px-0 mt-40 z-50 backdrop-blur-none'>
        <h1 className='text-center lg:text-start lg:w-2/5 mb-10 text-6xl font-bold dark:text-light'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='lg:w-1/3 mb-10 text-center lg-text-start lg:mx-0 mx-auto dark:text-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to='/sign-in'>
          <button
            type='button'
            className='flex items-center lg:mx-0 mx-auto text-slate-700  bg-gradient-to-r from-[#69C9FF] to-[#00DACC] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-16 py-2.5 text-center'>
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
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
