// RoomsList.js
'use client'
import React, { useEffect, useState } from 'react'
import Star from '/public/home/star.svg'
import ImageCarousel from '@/app/components/home/RoomCarousel'

const RoomsList = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/home`)
        const jsonData = await response.json()
        const roomsData = JSON.parse(jsonData.data)
        setData(roomsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-wrap p-[60px]">
      {data.map((room, index) => (
        <div
          key={index}
          className="w-1/4 h-full p-[12px] mb-1 flex flex-col items-start"
        >
          <div className="w-full h-1/8 relative mb-2">
            <ImageCarousel images={room.image} fill />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <span className="text-md font-bold mr-2">{room.country}</span>
              <span className="text-md font-semibold">{room.location}</span>
            </div>
            <div className="flex items-center">
              {room.rating !== null && (
                <span className="text-md mr-1">
                  <Star width="16" height="16" />
                </span>
              )}
              <span className="text-md mr-2">{room.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 text-md">
            {room.description !== null
              ? room.description
              : `${room.distance}km`}
          </p>
          <p className="text-gray-600 text-md">{room.date}</p>
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-1">₩{room.price}</span>
            <span>/박</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomsList
