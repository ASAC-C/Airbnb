import Image from "next/image";

export default async function PreviewPhoto() {
  const mainImgSize = 476.5;
  return (
    <div className="w-full h-[500px] px-20">
      <div className="w-[953px] h-full pt-6">
        {/* 메인 이미지 */}
        <div className="relative w-[476.5px] h-[476.5px]">
          <Image
            src="/sample/1.png"
            alt=""
            className="rounded-l-xl"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        {/* 작은 이미지(2x2) */}
      </div>
    </div>
  );
}
