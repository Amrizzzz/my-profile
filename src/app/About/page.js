"use client";
import Activity from "@/components/activity/page";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";


export default function About(hight, width) {

  let hg = 450;
  let wd = 450;

  function size(){
    hg = hight
    wd = width
  }
  useEffect(() => {
    window.addEventListener("resize", size())
    Aos.init();
  }, []);
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 sm:h-11 h-full">
        <h1
          className="font-bold text-2xl text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          About <span className="text-blue-500">My Self</span>
        </h1>
        <div className="md:flex md:gap-10 md:items-center">
          <div
            className="flex justify-center items-center mb-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              className="shadow-lg rounded-lg w-64 h-64 sm:w-64 sm:hidden sm:h-64 md:w-96 md:h-96 md:block"
              src="/foto.png"
              alt="..."
            />
          </div>
          {/* {tanggal} */}
          <div className="text-left w-full">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                {desc1.map((data) => (
                  <tbody
                    className="divide-y divide-gray-200"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                    // data-aos-delay={data.delay}
                  >
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {data.title}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.desc}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="w-full bg-white p-8">
        
      </footer> */}
    </>
  );
}

const desc1 = [
  { title: "Name", desc: "Muhamad Amrizal", delay: "0" },
  { title: "Birth Day", desc: "20 Agustus 1998", delay: "200" },
  { title: "City", desc: "Tangerang, Indonesia", delay: "400" },
  { title: "E-mail", desc: "rizalam708@gmail.com", delay: "600" },
  { title: "Language Program", desc: "html, css, javascript", delay: "800" },
  { title: "Framework", desc: "Next.js", delay: "1000" },
  { title: "Library", desc: "React.js", delay: "1200" },
];


