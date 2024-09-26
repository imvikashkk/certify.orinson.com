"use client";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Teko } from "next/font/google";
import LogoImg from "../../public/logo-img.png";
import { useRouter } from "next/navigation";


const teko = Teko({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400", "700"], // Specify the weights you need
  display: "swap", // Controls how the font is displayed
});

export default function Home() {
  const [inputFocused, setInputFocused] = useState(false);
  const [certificateNumber, setCertificateNumber] = useState("");

  const router = useRouter();

  return (
    <>
      <div
        className="h-[100vh] w-screen bg-cover bg-center relative flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#4039D4", // Background color only
        }}>
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div className=" w-full flex flex-col  items-center z-20">
          <div className="flex flex-1">
            <Link href="https://orinson.com" target="_blank" className="-m-1.5 p-1.5 flex gap-[6px] no-select" title="Visit Orinson.com">
              <Image
                className={`h-10 w-auto`}
                src={LogoImg}
                alt=""
                width={250}
                height={70}
              />
              <span
                className={`flex flex-col justify-center items-center no-select ${"gradient-text-logo-blue"}  ${
                  teko.className
                }`}>
                <span className="font-semibold text-xl mb-0 pb-0 tracking-[0.2rem] no-select">
                  ORINSON
                </span>
                <span className="font-semibold text-base -mt-2 pt-0 tracking-[0.07rem] no-select">
                  Technologies
                </span>
              </span>
            </Link>
          </div>  

          <h1 className="gradient-text-logo-blue no-select text-4xl  font-bold">Certification</h1>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            router.push(`/${certificateNumber}`)
            setCertificateNumber("")
          }}
          className={`relative z-10 w-full h-[30%] flex justify-center items-center transition-transform duration-500 ${
            inputFocused ? "translate-y-[-20px]" : "translate-y-[0]"
          }`}>
          <div className="flex justify-center items-center w-[90%] max-w-[700px] h-[50px] bg-white shadow-lg border border-gray-300 rounded-full overflow-hidden">
            <div className="w-[85%] h-full">
              <input
                className="w-full h-full px-4 py-2 text-gray-700 text-lg rounded-l-full outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300"
                type="text"
                placeholder="Enter Certificate Number..."
                onChange={(e)=>setCertificateNumber(e.target.value.toUpperCase())}
                value={certificateNumber}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
            </div>
            <div
              className="w-[15%] flex justify-center items-center h-full cursor-pointer transition-colors duration-300"
              style={{
                background:
                  "linear-gradient(90deg,#ee0979 0,#ff6a00 51%,#ee0979)", // Updated button gradient
              }}>
        <button type="submit">
        <IoSearch  className="text-white text-2xl" />
        </button>
            </div>
          </div>
        </form>

        {/* Quote */}
        <div className="relative z-10 w-full flex justify-center items-center mt-12">
          <p className="text-lg text-center max-w-[80%] flex-wrap opacity-0 animate-fadeInUp ">
            {[
              "Arise,",
              "awake,",
              "and",
              "stop",
              "not",
              "until",
              "the",
              "goal",
              "is",
              "reached.",
              ""
            ].map((word, index:number) => (
              <>
              <span
                key={index}
                className={`inline-block px-1 text-2xl font-semibold  gradient-text-logo-blue
                     animate-wordFadeIn`}
                style={{
                  animationDelay: `${index * 0.2}s`, // Delay for each word animation
                }}>
                {word}
              </span>
              {
                index == 10 && (
                  <span
                key={index}
                className={`inline-block px-1 text-2xl font-semibold   bg-gradient-to-r from-[#ff0000] via-[#ff6a00] to-[#ff0000] text-transparent bg-clip-text
                     animate-wordFadeIn`}
                style={{
                  animationDelay: `${index * 0.2}s`, // Delay for each word animation
                }}>
                {"- Swami Vivekananda"}
              </span>
                )
              }
              </>
            ))}
          </p>
        </div>

        {/* Background Animations */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full blur-lg animate-pulse"></div>
          <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-xl animate-ping"></div>
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-purple-500 to-gray-500 rounded-full blur-lg animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wordFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 0.95;
            transform: translateY(0);
          }
        }

        .animate-wordFadeIn {
          opacity: 0;
          animation: wordFadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
