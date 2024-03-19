'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '/public/common/logo.png'
import Globe from '/public/home/globe.svg'
import HamburgerMenu from '/public/home/hamburgermenu.svg'
import User from '/public/home/userprofile.svg'
import SearchBar from '@/app/components/header/SearchBar'
import LangModal from '@/app/components/header/LangModal'
import ProfileModal from '@/app/components/header/ProfileModal'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  return (
    <>
      <div className="mx-16 my-4 flex items-center">
        {/* 로고 */}
        <Link href="/" className="flex flex-1 justify-start flex-grow">
          <Image src={logo} alt="logo" width="100" height="40" />
        </Link>

        {/* 헤더 중앙 */}
        <div className="flex flex-1 justify-center items-center text-md">
          <button className="font-bold px-4">숙소</button>
          <button className="text-gray-500 hover:bg-gray-100 rounded-full px-4 py-4">
            체험
          </button>
          <button className="text-gray-500 hover:bg-gray-100 rounded-full px-4 py-4">
            온라인 체험
          </button>
        </div>

        {/* 헤더 프로필 부분 */}
        <div className="flex flex-1 justify-end flex-grow">
          <button className="text-md font-bold hover:bg-gray-100 rounded-full px-4">
            당신의 공간을 에어비엔비 하세요
          </button>
          <button
            className="hover:bg-gray-100 rounded-full mb-1 px-4 py-1"
            onClick={() => setIsModalOpen(true)}
          >
            <Globe width="18" height="18" />
          </button>
          <button
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            className="mx-2 border border-gray-300 rounded-full w-20 h-12 hover:shadow-lg"
          >
            <div className="flex">
              <HamburgerMenu
                width="48"
                height="48"
                className="justify-start mx-2 space-between mt-0 mb-4"
              />
              <User width="72" height="48" className="justify-end mx-2 mb-1" />
            </div>
          </button>
        </div>
      </div>

      {/* 검색바 */}
      <div className="flex items-center justify-center mb-4">
        <SearchBar />
      </div>
      <hr className="text-gray-400" />

      {/* 모달 컴포넌트들 */}
      {isModalOpen && <LangModal setIsModalOpen={setIsModalOpen} />}
      <ProfileModal anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  )
}
