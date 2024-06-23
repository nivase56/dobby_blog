import React from "react";
import triangle from "@/Images/triangle.png";
import mobileJaguar from "@/Images/mobilejaguar.png";
import Image from "next/image";
import googleplay from "@/Images/googleplay.png"
import appstore from "@/Images/appstore.png"
import ContentTag from "../../Common/ContentTag";
const DownloadApp = () => {
  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <Image
          src={triangle}
          alt="triangle"
          className="absolute"
          height={480}
        />
        <div className="relative py-20 px-8 md:px-48">
        
              
          <ContentTag content="DOWNLOAD" classNames="pb-4" />
          <h1 className="text-4xl font-bold">Download Glint </h1>
          <h1 className="text-4xl font-bold">Wise App for FREE</h1>
          <p className="py-2 text-sm text-gray-500">For faster, easier booking and exclusive deals.</p>
          <div className="flex flex-col gap-4 py-4 md:flex md:gap-5 md:py-5">
            <Image src={googleplay} alt="googleplay" className="h-10 w-36 md:h-12 md:w-40" />
            <Image src={appstore} alt="appstore" className="h-10 w-36 md:h-12 md:w-40"/>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex items-end justify-center">
        <Image src={mobileJaguar} alt="triangle" className="object-contain" width={600} height={650}/>
      </div>
    </div>
  );
};

export default DownloadApp;
