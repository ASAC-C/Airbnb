"use client";

export default function SignUpModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 overflow-y-auto flex flex-col justify-center items-center"
      id="wrapper"
    >
      <div className="bg-white w-full divide-y md:w-[600px] w-[90%] mx-auto divide-gray-300 text-black  items-center sm:mt-10 mx-5 border rounded-lg text-center lg:rounded-xl">
        <div className="p-2.5">
          <button className="" onClick={() => onClose()}></button>
          <span className="p-2 text-center text-base font-semibold">
            회원 가입 완료하기
          </span>
        </div>
        <div className="p-6">
          <form>
            <div className="relative divide-y flex flex-col rounded-lg border-2 border-gray-200 px-2 py-2.5 my-3.5 focus-within:ring focus-within:ring-black">
              <input
                type="text"
                name="이름"
                placeholder="이름(예: 길동)"
                autocomplete="off"
                className="block w-full bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
              />
              <input
                type="text"
                name="성"
                placeholder="성(예: 홍)"
                autocomplete="off"
                className="block w-full bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
              />
            </div>
            <h5>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</h5>
          </form>
        </div>
      </div>
    </div>
  );
}
