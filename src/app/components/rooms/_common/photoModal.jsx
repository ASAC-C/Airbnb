// React
import { useState } from "react";

// NextJS
import Image from "next/image";

// SVG
import SVG_Share from "/public/share.svg";
import SVG_WishList from "/public/wishList.svg";
import SVG_BackButton from "/public/backButton.svg";

export default function AllPhotoModal({ setIsOpenPhotoModal, arrImage }) {
  const [isAnimationEnd, setisAnimationEnd] = useState(false);
  const [isPlaySlideUpToFadeIn, setIsPlaySlideUpToFadeIn] = useState(true);

  /**
   * 모달창 애니메이션 종료
   */
  const onAnimationEnd = () => {
    if (!isPlaySlideUpToFadeIn) {
      setIsOpenPhotoModal(false);
      return;
    }

    setisAnimationEnd(true);
  };

  return (
    <div
      className={`w-full h-full z-10 fixed top-0 left-0 bg-white
        ${
          isPlaySlideUpToFadeIn
            ? "animate-slideUpToFadeIn"
            : "animate-slideDownToFadeOut opacity-0"
          // [CSS의 특성]
          // 두 가지 클래스가 함께 적용되면 각각의 효과가 결합되어 효과를 요소가 애니메이션과 동시에 투명해지는 효과를 나타낸다.
        }`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="w-full h-[60px] px-6 sticky flex justify-between items-center">
        {/* 뒤로 가기 */}
        <button
          className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-customBGHover"
          onClick={() => {
            setIsPlaySlideUpToFadeIn(false);
          }}
        >
          <SVG_BackButton className="w-4 h-4" />
        </button>

        <div className="flex justify-end items-end">
          {/* 공유하기 */}
          <div className="mr-5">
            <button className="p-2 mx-[-8px] flex items-center rounded-lg hover:bg-customBGHover">
              <span className="mr-2">
                <SVG_Share className="w-4 h-4" />
              </span>
              <div className="text-[14px] font-semibold">공유하기</div>
            </button>
          </div>

          {/* 저장 */}
          <div>
            <button className="p-2 mx-[-8px] rounded-lg hover:bg-customBGHover">
              <div className="flex items-center text-[14px] font-semibold">
                <span className="mr-2">
                  <SVG_WishList className="w-4 h-4" />
                </span>
                <div className="text-[14px] font-semibold">저장</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 사진 모음 */}
      {isAnimationEnd && (
        <div className="h-full pt-10 pb-20 overflow-y-auto scroll-smooth">
          <div className="grid gap-2 justify-items-center max-w-[740px] mx-auto">
            {arrImage.map((path, index) => (
              <GetImage
                key={index}
                index={index}
                path={path}
                bigImageSize={{
                  wh: "w-[740px] h-[495px]",
                  mediaQuery: "(max-width: 740px) auto, 740px",
                }}
                smallImgSize={{
                  wh: "w-[366px] h-[245px]",
                  mediaQuery: "(max-width: 366px) auto, 366px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GetImage({ index, path, bigImageSize, smallImgSize }) {
  const isBigImage = index % 3 === 0;
  const gridColumn = isBigImage ? "col-span-2" : "";
  return (
    <div
      // prettier-ignore
      className={`${gridColumn} ${isBigImage ? bigImageSize.wh : smallImgSize.wh} relative`}
    >
      <Image
        src={path}
        alt="-"
        fill
        sizes={`${
          isBigImage ? bigImageSize.mediaQuery : smallImgSize.mediaQuery
        }`}
        className="object-cover animate-fadeIn"
      />
    </div>
  );
}
