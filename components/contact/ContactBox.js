"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MdPhone, MdOutlineEmail } from "react-icons/md";

export default function ContactBox() {
  const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL

  return (
    <>
      <IconContext.Provider value={{ className: "text-xl" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20 md:mt-12 mt-6">
          <div className="contact-content-box md:max-w-xl 2xl:max-w-2xl flex p-4 sm:p-7 lg:p-14 bg-red-800 rounded-md">
            <div className="contact-content flex flex-col justify-center text-lg sm:text-xl gap-3 lg:text-2xl font-medium">
              <p className="indent-8 leading-loose">
                If you are interested and want to let&apos;s build the next big
                thing together, please contact me via the Email or telephone
                number below.
              </p>
              <Link
                href={RESUME_URL}
                target="_blank"
                className="resume-btn-url self-center md:self-auto"
              >
                <button className="bg-yellow-500 text-black w-52 rounded-md hover:bg-amber-500 hover:scale-105 transition duration-300 ease-in-out">
                  <div className="flex gap-2 p-2 items-center justify-center">
                    <PiDownloadSimpleBold />
                    <span className="text-base">Download my resume</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-5 md:p-7 gap-3">
            <p className="text-lg sm:text-xl leading-relaxed p-1 ">
              Let&apos;s talk about how I can help you. I&apos;m ready to help
              you develop modern and great website.
            </p>
            <div className="contact flex flex-col before:bg-red-800 before:w-full before:h-px before:my-3 gap-4">
              <div className="uppercase text-base sm:text-lg font-medium">
                Contact
              </div>
              <ul className="contact-list text-base sm:text-lg">
                <li className="flex items-center gap-3">
                  <span><MdPhone /></span>
                  <span>{process.env.NEXT_PUBLIC_PHONE_NUM}</span>
                </li>
                <li className="flex items-center gap-3 my-3">
                  <span><MdOutlineEmail /></span>
                  <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}