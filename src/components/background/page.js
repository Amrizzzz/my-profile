"use client";
import React from "react";
import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    // Aos.init();
    // Load spline-viewer script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.2/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        // className="bg-cover bg-center bg-no-repeat w-full"
        style={{ background: "url('/space.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-11 flex gap-2 items-center sm:flex-col md:flex-col">
          <h1
            className="text-purple-300 font-bold"
            style={{ fontSize: "100px" }}
          >
            SPACE DESIGN
          </h1>
          {/* <h1 className="text-purple-500 text-2xl">SPACE DESIGN</h1> */}
          <div className="">
            {" "}
            <spline-viewer url="https://prod.spline.design/qUBssgd00xuHVL8R/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>
    </>
  );
}
