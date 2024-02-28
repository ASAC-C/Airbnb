"use client";

import React, { useState } from "react";
import X from "/public/XMark.svg";
import SignupModal from "@/app/components/signupmodal";

export default function LoginModal({ openModal, onClose }) {
  const [signupModal, setsignupModal] = useState(false);
  // const [email, setEmail] = useState("");
  if (!openModal) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSignupModal = () => {
    console.log("1");
    setsignupModal(true);
  };

  return (
    // 모달띄우기
    <div
      className="fixed inset-0 bg-black bg-opacity-25 overflow-y-auto flex flex-col justify-center items-center animate-fadeIn"
      id="wrapper"
      onClick={handleClose}
    >
      {/* 모달헤더 */}
      <div className="bg-white w-full divide-y md:w-[600px] w-[90%] mx-auto divide-gray-300 text-black  items-center sm:mt-10 mx-5 border rounded-lg text-center lg:rounded-xl animate-slideUp">
        <div className="p-2.5">
          <button onClick={() => onClose()}>
            <X className="w-5 h-5" />
          </button>
          <span className="p-2 text-center text-base font-semibold">
            로그인 또는 회원 가입
          </span>
        </div>
        {/* 모달 내용 */}
        <div className="p-6">
          <h3 className="pb-2 text-xl font-semibold text-left">
            에어비앤비에 오신 것을 환영합니다.
          </h3>
          <form>
            {signupModal && (
              <SignupModal onClose={() => setsignupModal(false)} />
            )}
            <div className="relative rounded-lg border-2 border-gray-200 px-2 py-2.5 my-3.5 focus-within:ring focus-within:ring-black">
              <input
                type="text"
                name="이메일"
                placeholder="이메일"
                autocomplete="off"
                className="block w-full bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="font-semibold w-full transition items-center justify-center rounded-md text-sm bg-rose-500 text-white h-11"
              type="button"
              onClick={handleSignupModal}
            >
              계속
            </button>
          </form>
          <div class="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
            <span className="absolute px-3 font-medium text-gray-900 bg-white ">
              또는
            </span>
          </div>
          <button
            className="text-center font-semibold w-full border border-black rounded-md text-sm bg-white text-black h-11"
            type="submit"
          >
            카카오로 로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}
