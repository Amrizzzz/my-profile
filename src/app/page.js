"use client";
import Layout from "@/components/layout/page";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./About/page";
import Education from "@/components/education/page";
import Career from "./Resume/page";
import Example from "./Projects/page";

var width = 450;
var height = 450;

function resize() {
  if (window.innerWidth <= 769) {
    width = 50;
    height = 50;
  } else {
    width = 450;
    height = 450;
  }
}

export default function Home() {
  useEffect(() => {
    // check window
    resize();
    console.log(width, height);
    window.addEventListener("resize", resize);

    Aos.init();
    // Load spline-viewer script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.2/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Layout >
        <main className="mx-auto max-w-7xl px-4 py-11 sm:px-6 lg:px-8">
          {/* pembungkus kata dan gambar */}
          <div
            id="home"
            className="flex items-center w-full md:gap-12 flex-col-reverse md:flex-row"
          >
            {/* pembungkus kata */}
            <div
              data-aos="zoom-in"
              className="flex flex-col justify-center items-center pt-11 w-full"
            >
              <h1 className="text-2xl font-bold text-center">
                Hello <span className="text-blue-500">There</span>, Welcome to
                my website!
              </h1>
              <img
                src="/foto.png"
                alt="..."
                // className="w-64 h-64 sm:w-64 sm:h-64 md:w-96 md:h-96 filter grayscale"
                className="w-64 h-64 sm:w-64 sm:h-64 sm:block md:w-96 md:h-96 md:hidden"
                // height={height}
                // width={width}
              />
              <p
                className="text-center sm:font-light"
                data-aos="fade-down"
                data-aos-easing="linear"
                // data-aos-duration="600"
                // data-aos-delay="1200"
              >
                I am a young programmer with sufficient experience and have
                created several projects, for now I only focus on web
                applications{" "}
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              // className="flex justify-center items-center"
            >
              <img
                src="/foto.png"
                alt="..."
                // className="w-64 h-64 sm:w-64 sm:h-64 md:w-96 md:h-96 filter grayscale"
                className="w-64 h-64 sm:w-64 sm:h-64 sm:hidden md:w-96 md:h-96 md:block"
                // height={height}
                // width={width}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Add spline-viewer component
          <spline-viewer url="https://prod.spline.design/qUBssgd00xuHVL8R/scene.splinecode"></spline-viewer> */}
          <div id="about" className="md:h-144 sm:h-96">
            <About />
          </div>
          <div id="projects"></div>
          <br className="sm:hidden md:block"/>
          <div>
            <Example />
          </div>
          <div id="resume"></div>
          <br />
          <div>
            <Career />
          </div>
        </main>
      </Layout>
      {/* <footer className="w-full bg-white p-8">
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex gap-4 text-center justify-center items-center font-normal text-blue-500">
          <img className="h-8 w-20" src="/logo.png" alt="My Logo" />
          <p>&copy; 2024 Muhamad Amrizal</p>
        </div>
      </footer> */}
    </>
  );
}
