"use client";
// import React from "react";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

// export default function Projects() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       Projects
//     </main>
//   );
// }

const people = [
  {
    name: "AL-MUSTOFA",
    email: "al-mustofa web sell",
    limit: "0",
    imageUrl: "https://al-mustofa.vercel.app/company.png",
    year: "07/02/2024",
    lastSeenDateTime: "2023-01-23T13:23Z",
    link: "https://al-mustofa.vercel.app/",
    width:100,
    height: 100
  },
  {
    name: "Hyundai Gowa Tangerang",
    email: "Hyundai Gowa Web Sell",
    limit: "250",
    imageUrl: "/hyundai.svg",
    year: "20/06/2023",
    lastSeenDateTime: "2023-01-23T13:23Z",
    link: "https://www.hyundai-gowa-tangerang.com/",
    width:100,
    height: 200
  },
  {
    name: "DGMall Syariah",
    email: "DGMall Web Help",
    limit: "450",
    imageUrl: "/dgmall.png",
    year: "01/01/2023",
    lastSeenDateTime: "2023-01-23T13:23Z",
    link: "https://dgmall.id/help",
    width:100,
    height: 100
  },
];

export default function Example() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="mx-auto max-w-7xl px-4 py-6  lg:px-8">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {people.map((person) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            data-aos-delay={person.limit}
          >
            <figure>
              <div className="flex justify-center items-center mt-4">
                <Image
                  src={person.imageUrl}
                  alt="Shoes"
                  width={person.width}
                  height={person.height}
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{person.name}</h2>
              <p>{person.email}</p>
              <p>Publish : {person.year}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See Project {">"}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li
            key={person.email}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            data-aos-delay={person.limit}
          >
            <a
              href={person.link}
              target="__blank"
              className="flex justify-between gap-x-6 py-5 hover:bg-gray-300 hover:cursor-pointer px-1 items-center"
            >
              <span className="flex min-w-0 gap-x-4">
                <Image
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                  width={100}
                  height={100}
                />
                <span className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                </span>
              </span>
              <span className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                See Project {">"}
              </span>
            </a>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
