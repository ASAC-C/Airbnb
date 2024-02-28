"use client";

import LoginModal from "@/app/components/loginmodal";
import { Fragment, useState } from "react";

export default function LoginBtn() {
  const [showModal, setshowModal] = useState(false);
  return (
    <Fragment>
      <button
        className="text-white bg-blue-700 font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={() => setshowModal(true)}
      >
        Login Modal
      </button>
      <LoginModal openModal={showModal} onClose={() => setshowModal(false)} />
    </Fragment>
  );
}
