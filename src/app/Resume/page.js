import Activity from "@/components/activity/page";
import Education from "@/components/education/page";
import Sertification from "@/components/sertificarion/page";
// import GetTilwindScreenSize from "@/components/math/screen"
import React from "react";

export default function Career() {
  return (
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
  );
}
