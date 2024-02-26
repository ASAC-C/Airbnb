import React from "react";
import Header from "@component_rooms/header/ui_header";
import Top from "@component_rooms/top/ui_top";
import PreViewPhoto from "@component_rooms/photo/ui_previewPhoto";

export default async function Page() {
  return (
    <React.Fragment>
      {/* Area Header */}
      <Header />
      <Top />
      <PreViewPhoto />
    </React.Fragment>
  );
}
