"use client";
import Layout from "@/components/layout/page";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <>
      {/* <Layout /> */}
      <main className="mx-auto max-w-7xl px-4 py-11 sm:px-6 lg:px-8">
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">
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
    </>
    // <>
    //   <Layout />
    //   Hai
    // </>
  );
}
