import { PowerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          // className="dark:invert"
          src="/logo.svg"
          alt="Aamar Dokan"
          width={100}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PowerIcon className="h-4 w-4" />
          techsoul
        </a>
      </footer>
    </div>
  );
}
