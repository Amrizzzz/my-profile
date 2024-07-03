import Activity from "@/components/activity/page";
import Education from "@/components/education/page";
import Sertification from "@/components/sertificarion/page";
import React from "react";

export default function Career() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <Activity />
        </div>
        {/* <hr/> */}
        <div className="mt-6">
          <Education />
        </div>
        <div className="mt-6">
          <Sertification />
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
  );
}
