"use client";
import Layout from "@/components/layout/page";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Like from "./test/page";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <Layout /> */}
      <main className="mx-auto max-w-7xl px-4 py-11 sm:px-6 lg:px-8">
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center">
            Hello There, Welcom to my website !
          </h1>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="flex justify-center items-center"
        >
          <Image src="/foto.png" alt="..." height={400} width={200} />
        </div>
        
      </main>
      <footer className="w-full bg-white p-8">
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex gap-4 text-center justify-center items-center font-normal text-blue-500">
          <img className="h-8 w-20" src="/logo.png" alt="My Logo" />
          <p>&copy; 2024 Muhamad Amrizal</p>
        </div>
      </footer>
    </>
    // <>
    //   <Layout />
    //   Hai
    // </>
  );
}
