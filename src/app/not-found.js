"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()
 
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center ">
          <p className="text-base font-semibold text-color-accent">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-color-primary sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-color-primary">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-color-accent px-3.5 py-2.5 text-sm font-semibold text-color-dark shadow-sm hover:bg-color-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-secondary"
            >
              Go back home
            </Link>
            <button
              // onClick={()=>window.history.back()}
              onClick={()=>router.back()}
              className="rounded-md bg-color-primary px-3.5 py-2.5 text-sm font-semibold text-color-dark shadow-sm hover:bg-color-secondary hover:text-color-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-secondary"
              >
              Go Back
            </button>
            <a
              target="__blank"
              href="https://wa.me/6289628901440?text=website%20my-anime-list%20error%20bro"
              className="text-sm font-semibold text-color-primary"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
