"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 flex flex-col items-center justify-center text-center">
      {/* Stylized "much love" text */}
      <div className="relative w-full max-w-3xl mx-auto mb-10">
        <div className="flex flex-col text-[#EDEDED] font-balabeloo text-9xl tracking-tighter z-10 text-center scale-95 sm:scale-100 md:scale-125 lg:scale-150 ">
          <h1>MUCH</h1>
          <h1 className="-mt-8 lg:-mt-10">LOVE</h1>
        </div>
      </div>

      {/* Contact section */}
      <div className="w-full max-w-md">
        <p className="text-base mb-6 text-[var(--foreground)]">
          Want to get in touch? Reach out via email
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sudiksha.samanta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-md hover:opacity-90 transition-opacity"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
