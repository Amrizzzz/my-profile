"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Sertification() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <h1
        className="text-lg italic font-black"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="800"
      >
        Certification
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-wrap">
        <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black italic">
              SOFTWARE DEVELOPMENT FUNDAMENTALS (PROGRAMMER)
            </div>
            <div className="text-sm italic">National Professional Certification Board (BNSP), ID 620102514400017452019</div>
          </div>
          <hr />
        </li>
        <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="1200">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="timeline-end mb-10 md:text-start"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black italic">
              FUNDAMENTALS COURSE
            </div>
            <div className="text-sm italic">Has been awarded a certificate of attendance for the INTRO TO SOFTWARE ENGINEERING</div>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}
