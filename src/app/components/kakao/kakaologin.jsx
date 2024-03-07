"use client";
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import React, { useEffect } from "react";
import { getToken } from "@/app/components/kakao/gettoken";
import Kakao from "@/app/users/img/kakao_login_large_wide.png";
import Image from "next/image";

export default function KakaoLogin() {
  useEffect(() => {
    const search = new URLSearchParams(window.location.search); // 전체 URL
    const code = search.get("code"); // URI 인가코드
    const accessToken = localStorage.getItem("access_token");

    if (code && (!accessToken || accessToken === "undefined")) {
      //post로 oauth/token 토큰 요청하는 부분
      handleGetToken();
    }
  }, []); //최초 진입시 발동 (1.실제 최초인 경우 2. 카카오로부터 redirect 당해서 진입한 경우)

  const handleGetToken = async () => {
    const {
      token_type,
      access_token,
      expires_in,
      refresh_token,
      refresh_token_expires_in,
    } = await getToken();

    localStorage.setItem("access_token", access_token);
    window.close();
  };

  const authParam = new URLSearchParams({
    client_id: KAKAO_API_KEY || " ",
    redirect_uri: "http://localhost:3000/users",
    response_type: "code",
  });

  const handleLoginClick = () => {
    const authCodeUrl = `https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`;
    window.open(
      authCodeUrl,
      "_blank",
      "popup=1, width=500,height=600,left=500,top=50"
    );
  };

  return (
    <a href="" onClick={handleLoginClick} className="w-56 h-12">
      <Image src={Kakao} alt="카카오로그인" className="h-12 w-56" />
    </a>
  );
}
