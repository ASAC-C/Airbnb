'use client'
import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from '/public/menubar/menu_leftarrow.svg'
import ArrowRight from '/public/menubar/menu_arrow.svg'

export default function Carousel() {
  const menus = [
    { imgpath: 'menu_icon1.jpg', menuname: '캠핑장' },
    { imgpath: 'menu_icon2.jpg', menuname: '기상천외한 숙소' },
    { imgpath: 'menu_icon3.jpg', menuname: '통나무집' },
    { imgpath: 'menu_icon4.jpg', menuname: '디자인' },
    { imgpath: 'menu_icon5.jpg', menuname: '호수 근처' },
    { imgpath: 'menu_icon6.jpg', menuname: '스키' },
    { imgpath: 'menu_icon7.jpg', menuname: '방' },
    { imgpath: 'menu_icon8.jpg', menuname: '최고의 전망' },
    { imgpath: 'menu_icon9.jpg', menuname: '한적한 시골' },
    { imgpath: 'menu_icon10.jpg', menuname: '해변 바로 앞' },
    { imgpath: 'menu_icon11.jpg', menuname: '한옥' },
    { imgpath: 'menu_icon12.jpg', menuname: '료칸' },
    { imgpath: 'menu_icon13.jpg', menuname: '저택' },
    { imgpath: 'menu_icon14.jpg', menuname: '인기 급상승' },
    { imgpath: 'menu_icon15.jpg', menuname: '멋진 수영장' },
    { imgpath: 'menu_icon16.jpg', menuname: '국립공원' },
    { imgpath: 'menu_icon17.jpg', menuname: '민수' },
    { imgpath: 'menu_icon18.jpg', menuname: '초소형 주택' },
    { imgpath: 'menu_icon19.jpg', menuname: '상징적 도시' },
    { imgpath: 'menu_icon20.jpg', menuname: '농장' },
    { imgpath: 'menu_icon21.jpg', menuname: '스키 타고 출입' },
    { imgpath: 'menu_icon22.jpg', menuname: '와인 농장' },

    // 나머지 아이템들도 동일한 형태로 추가
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  }
  return (
    <Slider {...settings} className="w-full h-80">
      {/* menus 배열을 반복하여 각 이미지와 제목을 렌더링 */}

      {menus.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col">
            {/* Next.js의 Image 컴포넌트 사용 */}
            <Image
              src={`/menubar/${item.imgpath}`}
              alt={item.menuname}
              width={100}
              height={100}
            />
            <span className="mt-1">{item.menuname}</span>
          </div>
        </div>
      ))}
    </Slider>
  )
}
