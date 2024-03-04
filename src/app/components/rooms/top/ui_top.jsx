"use client";

import React from "react";
import SVG_Share from "/public/share.svg";
import SVG_WishList from "/public/wishList.svg";

export default function Top({ title }) {
  /**
   * '공유하기' 버튼 이벤트 처리
   * @param {e} : 이벤트 객체 (React - SyntheticEvent)
   */
  const onClickEventShare = (e) => {
    console.log("onClickEventShare");
  };

  /**
   * '저장' 버튼 이벤트 처리
   * @param {e} : 이벤트 처리 객체
   */
  const onClickEventWishList = (e) => {
    console.log("onClickEventWishList");
  };

  return (
    <React.Fragment>
      <div className="w-full h-auto inline-block">
        <div className="h-[54px] max-w-7xl px-20 pt-6 m-auto flex justify-between items-end">
          <h1 className="text-[26px] text-[#222222] font-semibold">{title}</h1>
          <div className="flex justify-end items-end">
            {/* 공유하기 */}
            <div className="mr-5">
              <button
                className="p-2 mx-[-8px] flex items-center hover:bg-customBGHover rounded-lg"
                onClick={onClickEventShare}
              >
                <span className="mr-2">
                  <SVG_Share className="w-4 h-4" />
                </span>
                <div className="text-[14px] font-semibold">공유하기</div>
              </button>
            </div>

            {/* 저장 */}
            <div>
              <button
                className="p-2 mx-[-8px] hover:bg-customBGHover rounded-lg"
                onClick={onClickEventWishList}
              >
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
      </div>
    </React.Fragment>
  );
}
