import React, { useState } from 'react'
import Search from '/public/home/search.svg'
import LocationModal from '@/app/components/LocationModal'
import TravelerModal from '@/app/components/TravelerModal'
import Calendar from '@/app/components/Calendar'
export default function SearchBar() {
  const [locationAnchorEl, setLocationAnchorEl] = useState(null)
  const [travelerAnchorEl, setTravelerAnchorEl] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const handleLocationModalOpen = (e) => {
    setLocationAnchorEl(e.currentTarget)
  }
  const handleTravelerModalOpen = (e) => {
    setTravelerAnchorEl(e.currentTarget)
  }
  const handleCheckInOutClick = () => {
    setShowCalendar(true)
  }

  const handleCalendarClose = () => {
    setShowCalendar(false)
  }
  return (
    <div className="w-[1100px] h-[88px] relative flex border border-b border-gray-300 rounded-full shadow-lg">
      {/* 검색바 */}
      <button
        className="w-1/3 flex flex-col justify-center hover:bg-gray-100 rounded-full"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleLocationModalOpen}
      >
        <div className="text-black font-bold ml-8">여행지</div>
        <div className="text-gray-500 items-center ml-8 text-lg">
          여행지 검색
        </div>
      </button>
      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100"
        onClick={handleCheckInOutClick}
      >
        <div className="text-black font-bold ml-8">체크인</div>
        <div className="text-gray-500 items-center ml-8 text-lg">날짜 추가</div>
      </button>
      <button
        className="w-1/6 flex flex-col justify-center rounded-full hover:bg-gray-100"
        onClick={handleCheckInOutClick}
      >
        <div className="text-black font-bold ml-8">체크아웃</div>
        <div className="text-gray-500 items-center ml-8 text-lg">날짜 추가</div>
      </button>
      <button
        className="w-1/3 flex flex-col justify-center pr-8 rounded-full hover:bg-gray-100"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleTravelerModalOpen}
      >
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

      {/* 모달 */}
      <LocationModal
        anchorEl={locationAnchorEl}
        setAnchorEl={setLocationAnchorEl}
      />
      <TravelerModal
        anchorEl={travelerAnchorEl}
        setAnchorEl={setTravelerAnchorEl}
      />
      {showCalendar && (
        <div className="absolute top-16 right-0 z-10">
          <Calendar onSelect={handleCalendarClose} />
        </div>
      )}
    </div>
  )
}
