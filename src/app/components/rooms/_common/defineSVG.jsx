// SVG
import SVGBed from "@/public/bed.svg";
import SVGStar from "@/public/star.svg";
import SVGHost from "@/public/host.svg";
import SVGMedal from "@/public/medal.svg";
import SVGArrow from "@/public/arrow.svg";
import SVGCheckIn from "@/public/checkIn.svg";
import SVGParking from "@/public/parking.svg";

import SVGTV from "@/public/amenities/tv.svg";
import SVGWifi from "@/public/amenities/wifi.svg";
import SVGKitchen from "@/public/amenities/kitchen.svg";
import SVGHairDryer from "@/public/amenities/hairDryer.svg";
import SVGWaterSide from "@/public/amenities/waterside.svg";
import SVGFreeParking from "@/public/amenities/freeParking.svg";
import SVGRefrigerator from "@/public/amenities/refrigerator.svg";
import SVGAirConditioner from "@/public/amenities/airConditioner.svg";
import SVGSecurityCamera from "@/public/amenities/securityCamera.svg";
import SVGCarbonMonoxideAlarm from "@/public/amenities/carbonMonoxideAlarm.svg";

const SVGComponents = {
  Bed: SVGBed,
  Star: SVGStar,
  Host: SVGHost,
  Arrow: SVGArrow,
  Medal: SVGMedal,
  CheckIn: SVGCheckIn,
  Parking: SVGParking,

  // 편의 시설
  TV: SVGTV,
  Wifi: SVGWifi,
  Kitchen: SVGKitchen,
  HairDryer: SVGHairDryer,
  Waterside: SVGWaterSide,
  FreeParking: SVGFreeParking,
  Refrigerator: SVGRefrigerator,
  AirConditioner: SVGAirConditioner,
  SecurityCamera: SVGSecurityCamera,
  CarbonMonoxideAlarm: SVGCarbonMonoxideAlarm,
};

export function DynamicSVGComponent({ componentName, className }) {
  const SVGComponent = SVGComponents[componentName];
  return SVGComponent ? <SVGComponent className={className} /> : null;
}
