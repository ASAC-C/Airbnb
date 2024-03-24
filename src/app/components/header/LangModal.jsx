import React, { useState } from 'react'
import Close from '/public/home/close.svg'

export default function LangModal({ setIsModalOpen }) {
  // 모달 닫기
  const modalClose = () => {
    setIsModalOpen(false)
  }

  const modalContent = (e) => {
    e.stopPropagation()
  }

  //모달 내용
  const [menu, setMenu] = useState('language')

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn z-40"
      onClick={modalClose}
    >
      <div
        className="bg-white w-[700px] h-[609px] p-5 rounded-2xl animate-slideUp relative overflow-y-auto z-50"
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
          <div className="flex justify-start">
            <button
              onClick={() => setMenu('language')}
              className="text-xl font-bold mx-4 hover:bg-gray-100"
            >
              언어와 지역
            </button>
            <button
              onClick={() => setMenu('money')}
              className="text-xl font-bold mx-4 hover:bg-gray-100"
            >
              통화
            </button>
          </div>
          <hr className="text-gray-400 m-4" />

          {/* 모달 내용 */}
          {menu === 'language' ? (
            <>
              <div className="m-4 bg-gray-100 h-auto inline-block rounded-md">
                <p className="text-xl p-4 pb-2">번역</p>
                <p className="text-lg px-4 pb-4 text-gray-500">
                  설명과 후기가 한국어로 자동 번역됩니다.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold p-4 pb-2">추천 언어 및 지역</p>
                <div className="flex mt-2 mx-4 text-lg">
                  <button className="p-4 text-left mr-4 hover:bg-gray-100 rounded-lg">
                    <p>English</p>
                    <p>United States</p>
                  </button>
                  <button className="p-4 text-left hover:bg-gray-100 rounded-lg">
                    <p>English</p>
                    <p>United Kingdom</p>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold p-4 pb-2">
                  언어와 지역을 선택하세요.
                </p>
                <div className="flex mt-2 mx-4 text-lg">
                  <button className="p-4 text-left mr-16 hover:bg-gray-100 rounded-lg">
                    <p>한국어</p>
                    <p>대한민국</p>
                  </button>
                  <button className="p-4 text-left hover:bg-gray-100 rounded-lg">
                    <p>English</p>
                    <p>United States</p>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-4">
              <p className="text-2xl font-bold p-4 pb-2">통화를 선택하세요.</p>
              <div className="flex mt-2 mx-4 text-lg">
                <button className="p-4 text-left mr-16 hover:bg-gray-100 rounded-lg">
                  <p>한국 원</p>
                  <p>KRW - ₩</p>
                </button>
                <button className="p-4 text-left hover:bg-gray-100 rounded-lg">
                  <p>미국 달러</p>
                  <p>USD - $</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
