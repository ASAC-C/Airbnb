"use client";

// React
import { useState } from "react";

// NextJS
import Image from "next/image";

// SVG
import AllPhotoModal from "@component_rooms/_common/photoModal";
import SVG_CircleGrid from "/public/circleGrid.svg";

export default function PreviewPhoto({ arrImage }) {
  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);

  /**
   * '사진 모두 보기' 버튼 이벤트 처리
   * @param {e} 이벤트 객체
   */
  const onClickEventViewAllPhoto = (e) => {
    setIsOpenPhotoModal(true);
  };

  /*
   * releative : 일반적인 문서의 흐름에 따라 배치하되, 상하좌우 위치 값에 따라 오프셋을 적용한다.
   * absolute  : 일반적인 문서의 흐름에서 제거하고, 가장 가까운 position 지정 요소에 대해 상대적 오프셋을 적용한다.
   */

  return (
    <div className="w-full h-auto">
      <div className="px-20 flex flex-wrap justify-start items-stretch">
        <div className="w-[1120px] max-w-7xl m-auto">
          <div className="pt-6 flex relative">
            <div className="w-[560px] h-[485px] relative">
              <Image
                src={arrImage[0]}
                alt="-"
                fill
                sizes="(max-width: 560px) 100%, 560px"
                className="object-cover rounded-l-xl"
                priority
              />
              <div
                // inset-0 : 부모 요소의 네 가장자리에 정확하게 배치하는 데 사용한다.
                className="absolute inset-0 cursor-pointer bg-black opacity-0
                  transition-opacity duration-100 hover:opacity-[.18] rounded-l-xl"
                onClick={onClickEventViewAllPhoto}
              />
            </div>
            <div className="pl-2 grid grid-cols-2 gap-2">
              {arrImage
                .filter((path, index) => index > 0 && index < 5)
                /*
                 * 화살표 함수에서 () => () 처럼 소괄호로 감싸면 return문을 작성하지 않아도 리턴된다.
                 * 반면 () => {}처럼 중괄호로 감쌌다면 return문이 있어야만 리턴 값을 반환한다.
                 */
                .map((path, index) => (
                  <GetImage
                    key={index}
                    path={path}
                    // prettier-ignore
                    rounded={`${index === 1 ? "rounded-tr-xl" : index === 3 ? "rounded-br-xl" : ""}`}
                    clickEventHandler={onClickEventViewAllPhoto}
                  />
                ))}
            </div>

            {/* 사진 모두 보기 */}
            <div className="absolute bottom-[24px] right-[24px]">
              <button
                className="px-[15px] py-[7px] flex items-center 
                  transition-transform duration-100 active:scale-95
                  bg-white border border-black rounded-lg text-sm font-semibold "
                onClick={onClickEventViewAllPhoto}
              >
                <SVG_CircleGrid className="w-4 h-4" />
                <div className="ml-2">사진 모두 보기</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 사진 모집 모달창 */}
      {
        isOpenPhotoModal ? (
          <AllPhotoModal
            setIsOpenPhotoModal={setIsOpenPhotoModal}
            arrImage={arrImage}
          />
        ) : null /* 다른 표현 방법으로는 {isModalOpen && <Modal />} null을 생략하여 요소를 렌더링하지 않는 표현 방법(falsy값)이 있다. */
      }
    </div>
  );
}

/**
 * 이미지 가져오기
 * @param {path : 이미지 경로, rounded : 외곽 형태, clickEventHandler : 사진 모집 모달창 활성화 }
 */
function GetImage({ path, rounded, clickEventHandler = null }) {
  return (
    <div className="w-[272px] h-[238.5px] relative">
      <Image
        src={path}
        alt="-"
        fill
        sizes="(max-width: 272px) 100%, 272px"
        className={`object-cover ${rounded !== "" ? rounded : "rounded-none"}`}
      />
      <div
        className={`absolute inset-0 cursor-pointer ${rounded}  
        bg-black opacity-0 transition-opacity duration-100 hover:opacity-[.18]`}
        onClick={clickEventHandler}
      />
    </div>
  );
}
