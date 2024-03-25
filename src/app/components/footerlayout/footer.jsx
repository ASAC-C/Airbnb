export default function Footer() {
  return (
    <>
      <div className="w-[1519.2px] h-[435.7px] border-t-[0.8px] fixed bottom-0 left-0 right-0">
        <div className="w-[1120px] px-20 mx-[120px] flex flex-col">
          <div className="h-[306px] flex space-x-2">
            <div className="w-[368px] h-[210px] py-12 text-[14px]">
              <strong className="mb-3">에어비앤비 지원</strong>
              <ul className="flex-col space-y-3">
                <li>도움말 센터</li>
                <li>에어커버</li>
                <li>차별 반대</li>
                <li>장애인 지원</li>
                <li>예약 취소 옵션</li>
                <li>이웃 민원 신고</li>
              </ul>
            </div>
            <div className="w-[368px] h-[210px] py-12 text-[14px]">
              <strong className="mb-3">호스팅</strong>
              <ul className="flex-col space-y-3">
                <li>당신의 공간을 에어비앤비하세요</li>
                <li>호스트를 위한 에어커버</li>
                <li>호스팅 자료</li>
                <li>커뮤니티 포럼</li>
                <li>책임감 있는 호스팅</li>
                <li>무료 호스팅 클래스 참여하기</li>
              </ul>
            </div>
            <div className="w-[368px] h-[210px] py-12 text-[14px]">
              <strong className="mb-3">에어비앤비</strong>
              <ul className="flex-col space-y-3">
                <li>뉴스룸</li>
                <li>새로운 기능</li>
                <li>채용정보</li>
                <li>투자자 정보</li>
                <li>Airbnb 긴급 숙소</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
