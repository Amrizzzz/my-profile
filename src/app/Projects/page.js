"use client";
// import React from "react";

import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
// import { useRouter } from "next/router";

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
    width: 100,
    height: 100,
  },
  {
    name: "Hyundai Gowa Tangerang",
    email: "Hyundai Gowa Web Sell",
    limit: "250",
    imageUrl: "/hyundai.svg",
    year: "20/06/2023",
    lastSeenDateTime: "2023-01-23T13:23Z",
    link: "https://www.hyundai-gowa-tangerang.com/",
    width: 100,
    height: 200,
  },
  {
    name: "DGMall Syariah",
    email: "DGMall Web Help",
    limit: "450",
    imageUrl: "/dgmall.png",
    year: "01/01/2023",
    lastSeenDateTime: "2023-01-23T13:23Z",
    link: "https://dgmall.id/help",
    width: 100,
    height: 100,
  },
];

export default function Example() {
  // const router = useRouter()
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
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
      </main>
      <footer className="w-full bg-white p-8">
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex gap-4 text-center justify-center items-center font-normal text-blue-500">
        <img
              className="h-8 w-20"
              src="/logo.png"
              alt="My Logo"
              // onClick={() => onClcikMenu("Dashboard")}
            />
          <p>&copy; 2024 Muhamad Amrizal</p>
        </div>
      </footer>
    </>
  );
}
