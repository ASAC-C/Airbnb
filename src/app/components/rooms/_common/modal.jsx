import { useEffect } from "react";

export default function FullModal() {
  // 애니메이션이 종료될 때 호출되는 함수
  const handleAnimationEnd = () => {
    console.log("애니메이션이 종료되었습니다.");
  };

  // 컴포넌트가 마운트되면 이벤트 리스너 등록
  useEffect(() => {
    const animatedElement = document.getElementById("animated-element");
    animatedElement.addEventListener("animationend", handleAnimationEnd);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      animatedElement.removeEventListener("animationend", handleAnimationEnd);
      console.log("@@ : " + animatedElement);
    };
  }, []); // useEffect의 의존성 배열이 비어 있으므로 컴포넌트가 마운트될 때 한 번만 실행됨

  return (
    <div
      id="animated-element"
      className="fixed top-0 left-0 w-full h-full z-10 bg-white animate-slideUpToFadeIn"
    ></div>
  );
}
