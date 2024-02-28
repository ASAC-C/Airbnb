import React from 'react'
import Search from '/public/home/search.svg'

export default function SearchBar() {
  return (
    <div className="w-[1100px] h-[88px] relative flex border border-b border-gray-300 rounded-full shadow-lg">
      <button className="w-1/3 flex flex-col justify-center hover:bg-gray-100 rounded-full">
        <div className="text-black font-bold ml-8">여행지</div>
        <div className="text-gray-500 items-center ml-8 text-lg">
          여행지 검색
        </div>
      </button>
      <button className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <div className="text-black font-bold ml-8">체크인</div>
        <div className="text-gray-500 items-center ml-8 text-lg">날짜 추가</div>
      </button>
      <button className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <div className="text-black font-bold ml-8">체크아웃</div>
        <div className="text-gray-500 items-center ml-8 text-lg">날짜 추가</div>
      </button>
      <button className="w-1/3 flex flex-col justify-center pr-8 rounded-full hover:bg-gray-100">
        <div className="text-black font-bold ml-8">여행자</div>
        <div className="text-gray-500 items-center ml-8 text-lg">
          게스트 추가
        </div>
      </button>
      <div className="flex flex-row items-center mr-4">
        <button className="flex justify-center items-center rounded-full w-16 h-16 bg-rose-500 hover:bg-rose-600">
          <Search width="24" height="24" />
        </button>
      </div>
    </div>
  )
}
