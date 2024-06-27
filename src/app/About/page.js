"use client";
import Activity from "@/components/activity/page";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css"

export default function About() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 sm:h-11 h-full">
      <h1
        className="text-blue-500 font-bold text-2xl text-center"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        About My Self
      </h1>
      <div className="md:flex md:gap-10 md:items-center">
        <div
          className="flex justify-center items-center mb-5"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Image
            className="shadow-lg rounded-lg"
            src="/foto.png"
            alt="..."
            height={600}
            width={450}
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
                  data-aos-delay={data.delay}
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
      <div className="mt-2 text-m">
        <h4
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
          data-aos-delay="1200"
        >
          I am a young programmer with sufficient experience and have created
          several projects, for now I only focus on web applications{" "}
        </h4>
        <br />
        <h4
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
          data-aos-delay="1400"
        >
          Apart from that, I also have several certificates including:
        </h4>
        <br />
        <br />
        <List1 />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {/* <Activity/> */}
    </main>
  );
}

const desc1 = [
  { title: "Name", desc: "Muhamad Amrizal", delay: "0" },
  { title: "Birth Day", desc: "20 Agustus 1998", delay: "200" },
  { title: "City", desc: "Tangerang, Indonesia", delay: "400" },
  { title: "E-mail", desc: "rizalam708@gmail.com", delay: "600" },
  { title: "Language Program", desc: "html, css, javascript", delay: "800" },
  { title: "Framework", desc: "Next.js", delay: "1000" },
];

export const List1 = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="600"
        data-aos-delay="0"
      >
        <span>&nbsp;&nbsp;&nbsp;• </span>
        <span>
          BNSP: Software Development (programmer) - ID 62010 2514 4 0003322 2020
        </span>
      </div>
      <br />
      {/* <div>
        <span>&nbsp;&nbsp;&nbsp;• </span>
        <span>
          BNSP: Software Development (programmer) - ID 62010 2514 4 0003322 2020
        </span>
      </div> */}
    </>
  );
};
