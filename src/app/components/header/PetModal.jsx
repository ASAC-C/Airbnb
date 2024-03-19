import React, { useState } from 'react'
import Close from '/public/home/close.svg'
import Image from 'next/image'
import pet from '/public/home/pet.jpg'
export default function PetModal({ setIsModalOpen }) {
  // 모달 닫기
  const modalClose = () => {
    setIsModalOpen(false)
  }

  const modalContent = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn"
      onClick={modalClose}
    >
      <div
        className="bg-white w-[666px] h-[629px] p-5 rounded-2xl animate-fadeIn relative overflow-y-auto"
        onClick={modalContent}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-0 left-0 m-4"
        >
          <Close width="36" height="36" />
        </button>

        {/* 모달 메뉴 */}
        <div className="mt-12">
          <div className="flex w-full justify-between items-center">
            <Image src={pet} alt="pet" width="500" height="428" />
          </div>
          <div className="text-3xl font-bold mt-8">보조동물</div>
          <p className="mt-2 text-xl">
            보조동물은 반려동물이 아니므로 여기에 추가할 필요가 없습니다.
          </p>
          <p className="mt-4 text-xl">
            정서적 지원 동물과 함께 여행하시나요? 에어비앤비 &nbsp;
            <a
              href="https://www.airbnb.co.kr/help/article/1869"
              className="font-bold underline"
            >
              접근성 정책
            </a>
            을 확인해보세요.
          </p>
        </div>
      </div>
    </div>
  )
}
