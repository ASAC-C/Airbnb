"use client";

import Link from "next/link";

// SVG
import SVGStar from "@/public/star.svg";
import SVGHost from "@/public/host.svg";
import SVGCheckIn from "@/public/checkIn.svg";
import SVGMedal from "@/public/medal.svg";
import SVGParking from "@/public/parking.svg";
import SVGArrow from "@/public/arrow.svg";
import SVGBed from "@/public/bed.svg";
import SVGWaterSide from "@/public/waterside.svg";

export default function TravelInfo() {
  return (
    <div>
      {/* 간소화 정보 */}
      <div className="py-8 border-b border-#222222">
        <h1 className="text-[22px] font-semibold">
          Seo-myeon, Hongcheon, 한국의 텐트
        </h1>
        <ul className="flex flex-row space-x-1">
          <li>최대 인원 2명</li>
          <span>·</span>
          <li>침대 1개</li>
          <span>·</span>
          <li>욕실 1개</li>
        </ul>
        <div className="mt-1 flex items-center space-x-1">
          <SVGStar className="w-4 h-4" />
          <Link href="" className="font-semibold border-b border-black pb-0">
            후기 2개
          </Link>
        </div>
      </div>

      {/* 호스트 소개 */}
      <div className="py-8 border-b border-#222222">
        <div className="flex space-x-6">
          <SVGHost className="w-[40px] h-[40px]" />
          <div>
            호스트: Onda 님
            <ul className="flex flex-row space-x-1 text-[#717171]">
              <li>슈퍼호스트</li>
              <span>·</span>
              <li>호스팅 경력 5년</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 서비스 */}
      <div className="py-8 border-b border-#222222">
        <div className="flex flex-col gap-6">
          {/* List - 1 */}
          <div class="flex gap-x-6">
            <div className="w-[40px] h-[40px] flex justify-center">
              <SVGCheckIn className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">셀프 체크인</h3>
              <div className="text-[#717171]">
                건물 직원의 도움을 받아 체크인하실 수 있습니다.
              </div>
            </div>
          </div>
          {/* List - 2 */}
          <div class="flex gap-x-6">
            <div className="w-[40px] h-[40px] flex justify-center">
              <SVGMedal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Onda님은 슈퍼호스트입니다</h3>
              <div className="text-[#717171]">
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는 호스트입니다.
              </div>
            </div>
          </div>
          {/* List - 3 */}
          <div class="flex gap-x-6">
            <div className="w-[40px] h-[40px] flex justify-center">
              <SVGParking className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">무료 주차 혜택을 누리세요</h3>
              <div className="text-[#717171]">
                해당 지역에서 무료 주차가 가능한 몇 안 되는 숙소 중 하나입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 소개 */}
      <div className="pt-8 pb-12 border-b border-#222222">
        <div className="line-clamp-6">
          안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이
          곳에서 머무를 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.
          <br />
          <br />
          [숙소 소개]
          <br />
          푸른 자연이 기다리는 이곳에 오신 것을 환영합니다.
          <br />
          <br />
          ...{/* 생략 - todo. 데이터 파일로 읽어서 출력  */}
        </div>
        <div className="mt-[16px]">
          <span
            className="inline-flex flex-row items-center space-x-1 hover:cursor-pointer"
            onClick={() => {
              console.log("onClick Handler 더 보기");
            }}
          >
            <span className="font-semibold border-b border-black">더 보기</span>
            <SVGArrow className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* 숙박 장소 */}
      <div className="py-12 border-b border-#222222">
        <div className="pb-6">
          <h2 className="text-[22px] font-semibold">숙박 장소</h2>
          <div className="flex">
            <div className="p-2">
              <div className="p-6 border border-1 border-solid border-#dddddd rounded-2xl">
                <div className="min-w-[157px] mb-4">
                  <SVGBed className="w-6 h-6" />
                </div>
                <div className="mt-2 font-semibold">공용 공간</div>
                <div>더블 침대 1개</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 숙소 편의시설 */}
      <div className="py-12 border-b border-#222222">
        <div className="pb-6">
          <h2 className="text-[22px] font-semibold">숙소 편의시설</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div className="pb-4 flex items-center">
            {/* todo. 동적 요소로 생성 (샘플 코드 참조)
                {items.map((item, index) => (
                  <div key={index} className="">
                    {item}
                  </div>
                ))}
             */}
            <SVGWaterSide className="w-6 h-6 mr-3" />
            수변에 인접
          </div>
        </div>
      </div>
    </div>
  );
}
