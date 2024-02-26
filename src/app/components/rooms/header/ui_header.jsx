import React from "react";
import Image from "next/image";

export default async function Header() {
  return (
    <React.Fragment>
      <div
        className="
            w-full h-20 px-10 lg:px-20 
            flex justify-between items-center border-b border-#dddddd"
      >
        {/* Logo */}
        <div>
          <a href="https://www.airbnb.co.kr/" className="w-auto">
            <Image src="/common/logo.png" width={102} height={0} alt=""></Image>
          </a>
        </div>

        {/* Search */}
        <span className="flex bg-cyan-300 w-[411px] h-12 px-6 items-center">
          <button className="w-88 rounded-full border-2">Button(1)</button>
          <button className="bg-pink-500 text-yellow-500">Button(2)</button>
          <button className="bg-lime-500 text-yellow-500">Button(3)</button>
        </span>

        {/* Link */}
        <a
          href="https://www.airbnb.co.kr/host/homes"
          className="w-[231.97px] h-[42px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full"
        >
          <span className="text-sm font-semibold text-[#222222] ">
            당신의 공간을 에어비앤비하세요
          </span>
        </a>

        {/* G-Language Button */}
        <button className="w-[46px] h-[42px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full">
          <svg
            className="w-4 h-4"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            ></path>
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
}
