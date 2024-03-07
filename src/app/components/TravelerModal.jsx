'use client'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
import PetModal from '@/app/components/PetModal'
// count 상태 Custom Hook
function useCount(initialCount) {
  const [count, setCount] = useState(initialCount)
  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const onDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, -1, 0)) // 최솟값 0 설정
  }
  return [count, onIncrease, onDecrease]
}

export default function TravelerModal({ anchorEl, setAnchorEl }) {
  // traveler 내용
  const [adultCount, onIncreaseAdultCount, onDecreaseAdultCount] = useCount(0)
  const [childCount, onIncreaseChildCount, onDecreaseChildCount] = useCount(0)
  const [babyCount, onIncreaseBabyCount, onDecreaseBabyCount] = useCount(0)
  const [petCount, onIncreasePetCount, onDecreasePetCount] = useCount(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 모달 박스 MUI
  const isOpen = Boolean(anchorEl)
  const onClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      id="traveler-modal"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '16px',
          width: '480px',
        },
      }}
    >
      <MenuItem
        sx={{
          fontSize: '20px',
          padding: '16px',
        }}
      >
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">성인</span>
            <span className="text-lg text-gray-500">13세 이상</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={onDecreaseAdultCount}
              className="items-center text-3xl px-4 py-1 border rounded-full border-gray-500"
            >
              -
            </button>
            <span className="p-4">{adultCount}</span>
            <button
              onClick={onIncreaseAdultCount}
              className="items-center text-xl px-4 py-2 border rounded-full border-gray-500"
            >
              +
            </button>
          </div>
        </div>
      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>
        {' '}
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">어린이</span>
            <span className="text-lg text-gray-500">2~12세</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={onDecreaseChildCount}
              className="items-center text-3xl px-4 py-1 border rounded-full border-gray-500"
            >
              -
            </button>
            <span className="p-4">{childCount}</span>
            <button
              onClick={onIncreaseChildCount}
              className="items-center text-xl px-4 py-2 border rounded-full border-gray-500"
            >
              +
            </button>
          </div>
        </div>
      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">유아</span>
            <span className="text-lg text-gray-500">2세 미만</span>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={onDecreaseBabyCount}
              className="items-center text-3xl px-4 py-1 border rounded-full border-gray-500"
            >
              -
            </button>
            <span className="p-4">{babyCount}</span>
            <button
              onClick={onIncreaseBabyCount}
              className="items-center text-xl px-4 py-2 border rounded-full border-gray-500"
            >
              +
            </button>
          </div>
        </div>
      </MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>
        <div className="flex justify-between w-full py-4 px-8">
          <div className="flex flex-col">
            <span className="font-bold">반려동물</span>
            <button
              className="text-lg font-bold text-gray-600 underline"
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              보조동물을 동반하시나요?
            </button>
          </div>

          <div className="flex justify-between w-28 items-center">
            <button
              onClick={onDecreasePetCount}
              className="items-center text-3xl px-4 py-1 border rounded-full border-gray-500"
            >
              -
            </button>
            <span className="p-4">{petCount}</span>
            <button
              onClick={onIncreasePetCount}
              className="items-center text-xl px-4 py-2 border rounded-full border-gray-500"
            >
              +
            </button>
          </div>
        </div>
      </MenuItem>
      {isModalOpen && <PetModal setIsModalOpen={setIsModalOpen} />}
    </Menu>
  )
}
