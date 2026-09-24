"use client"
import React, { useEffect } from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

interface ErrorProps{
    error: Error & {digest?:string};
    reset: ()=> void;
}

const HomeError = ({error, reset}:ErrorProps) => {  
    useEffect(()=>{
        console.error(error);
    }, [error]);
    
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">

        {/* Error Icon */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#30343D] bg-[#15171D] sm:h-28 sm:w-28">
          <FaExclamationTriangle
            className="text-[36px] text-[#C2F800] sm:text-[44px]"
          />
        </div>

        {/* Error Label */}
        <p className="mb-2 text-xs font-bold tracking-[0.3em] text-[#C2F800]">
          SOMETHING WENT WRONG
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
          WORKOUTS FAILED TO LOAD
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base">
          We couldn&apos;t load your workout library.
          Please try again in a moment.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="btn mt-8 h-auto min-h-11 rounded-full border-none bg-[#C2F800] px-6 py-3 text-xs font-bold text-black transition-colors hover:bg-[#a8d900] sm:px-8"
        >
          <FaRedo className="text-sm" />
          TRY AGAIN
        </button>

        {/* Bottom Label */}
        <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-[#555B68]">
          TRAIN WITH INTENT. LOG EVERY SET.
        </p>

      </div>
    </main>
    );
};

export default HomeError;