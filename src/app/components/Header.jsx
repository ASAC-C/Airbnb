'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '/public/common/logo.png'
import Globe from '/public/home/globe.svg'
import HamburgerMenu from '/public/home/hamburgermenu.svg'
import User from '/public/home/userprofile.svg'
import SearchBar from '@/app/components/SearchBar'
import LangModal from '@/app/components/LangModal'
import ProfileModal from '@/app/components/ProfileModal'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  return (
    <>
      <div className="mx-24 my-4 flex items-center">
        {/* 로고 */}
        <Link href="/" className="flex flex-1 justify-start flex-grow">
          <Image src={logo} alt="logo" width="136" height="48" />
        </Link>

        {/* 헤더 중앙 */}
        <div className="flex flex-1 justify-center items-center text-xl">
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
          <button className="text-xl font-bold hover:bg-gray-100 rounded-full px-4">
            당신의 공간을 에어비엔비 하세요
          </button>
          <button
            className="hover:bg-gray-100 rounded-full mb-1 px-4 py-1"
            onClick={() => setIsModalOpen(true)}
          >
            <Globe width="24" height="24" />
          </button>
          <button
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            className="mx-4 border border-gray-300 rounded-full w-32 h-16 hover:shadow-lg"
          >
            <div className="flex">
              <HamburgerMenu
                width="40"
                height="32"
                className="justify-start mx-4"
              />
              <User width="44" height="32" className="justify-end mx-4" />
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
