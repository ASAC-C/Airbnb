// ImageCarousel.js
import React, { useState } from 'react'
import ArrowLeftIcon from '/public/arrow.svg'
import ArrowRightIcon from '/public/arrow.svg'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-[315px] rounded-lg"
      />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-none outline-none"
        onClick={goToPreviousSlide}
      >
        <ArrowLeftIcon className="w-8 h-8 text-gray-500 hover:text-gray-800" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none outline-none"
        onClick={goToNextSlide}
      >
        <ArrowRightIcon className="w-8 h-8 text-gray-500 hover:text-gray-800" />
      </button>
    </div>
  )
}

export default ImageCarousel
