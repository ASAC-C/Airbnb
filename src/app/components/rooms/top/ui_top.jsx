import React from "react";
import {
  SHARE_ICON,
  HEART_ICON,
  GetDeafultSettingIcon,
} from "@/app/components/rooms/_common/commonSVG";

export default async function Top({ travelID = 0 }) {
  const iconSize = { width: 16, height: 16 };
  const roominfo = await fetch(`/api/room/${travelID}`)

  return (
    <React.Fragment>
      <div className="w-full h-[54px] px-20 pt-6 flex justify-between items-center">
        <h1 className="text-[26px] font-semibold text-[#222222]">
          {/* todo. 여행지 이름, 데이터로 받아와야 한다.  */}
          감성힐링 체험이 있는 글램핑 숙소의 감성카바나 travelID({travelID})
        </h1>
        <div className="w-[152px] h-[34px] flex justify-between">
          {/* 공유하기 버튼 */}
          <button
            className="w-auto inline-block items-start 
              text-[14px] font-semibold leading-[18px] text-[#222222]"
          >
            <div className="w-[80px] h-[18px] flex justify-between items-center">
              <GetDeafultSettingIcon iconPath={SHARE_ICON} size={iconSize} />
              공유하기
            </div>
          </button>
          {/* 저장 버튼 */}
          <button
            className="w-auto inline-block items-start 
              text-[14px] font-semibold leading-[18px] text-[#222222]"
          >
            <div className="w-[52px] h-[18px] flex justify-between items-center">
              <GetDeafultSettingIcon iconPath={HEART_ICON} size={iconSize} />
              저장
            </div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
