"use client";
import React from "react";
import { Teko } from "next/font/google";
import LogoImg from "../../../public/logo-img.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teko = Teko({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400", "700"], // Specify the weights you need
  display: "swap", // Controls how the font is displayed
});

const Page = ({params:{cert}}:{params:{cert:string}}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const handleCertificate = async (cert:string) => {
        const res = await fetch(`/${cert}`)
  }

  // if (loading) {
  //   return (
  //     <section className="h-screen bg-[#211b95]  flex justify-center items-center">
  //       <div className="lds-ripple">
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <div className="h-[100vh] w-screen bg-cover bg-center bg-[#211b95] ">
      <div className="w-full h-full flex flex-col pt-8 md:pt-0 md:justify-center items-center">
        <div
          className=" border-x-2 border-t-2 px-4 py-2 rounded-ss-lg rounded-se-lg
         border-[#ff6a00] bg-[#231da3]">
          <div className="flex flex-1">
            <Link
              href="https://orinson.com"
              target="_blank"
              className="-m-1.5 p-1.5 flex gap-[6px] no-select"
              title="Visit Orinson.com">
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
        </div>
        <div className="w-[100%] md:w-[80%] lg:w-[70%] bg-blue-50 border-2 rounded-lg px-4 py-2 border-[#ff6a00]">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-x-1 pb-4 pt-2 border-b border-black">
            <p className="text-gray-500 text-xl font-semibold">
              Certificate Number:
            </p>
            <p className="-mt-1 sm:mt-[3px] text-xl font-semibold">
              WDPB-08/2012-INT-123
            </p>
          </div>

          <div className="mt-2 pb-3 flex flex-col min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:gap-x-2 min-[360px]:justify-evenly">
            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Name:</p>
              <p className="-mt-2 min-[360px]:mt-[3px] font-semibold">
                Vikash Kumar Khunte
              </p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Email:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">imvikashkk@gmail.com</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Mobile:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">+91755XX8XX56</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Gender:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">Male</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">DOB:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">10/12/2003</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Goverment ID:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">UIDAI (Aadhaar)</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">ID Number:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">XXXXXXXX7878</p>
            </div>
          </div>

          <div className="pt-3  relative border-t flex flex-col min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:gap-x-2 min-[360px]:justify-evenly border-b border-black pb-2 ">
            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Course/Branch:</p>
              <p className="-mt-2 min-[360px]:mt-[3px] ">B.Tech</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">School/College:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">
                Bhilai Institute of Technology, Durg
              </p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Passing Year:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">2025</p>
            </div>

            <div className="absolute -top-3 bg-blue-50 text-[#bb6b32]  left-[calc(50%-30px)]">
              Academic
            </div>
          </div>

          <div className="mt-6 pb-2 w-full flex justify-center">
            <div className="relative w-[95%] border-2 rounded-md border-[#ff6a00] px-3 py-4">
              <div className="flex justify-center items-center gap-4">
                <div className="flex flex-col min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:gap-x-4 min-[360px]:justify-evenly">
                  <div className="flex flex-col items-center ">
                    <p className="text-gray-500 text-lg">Job Type</p>
                    <p className="-mt-1 text-center">Internship</p>
                  </div>

                  <div className="flex flex-col items-center ">
                    <p className="text-gray-500 text-lg">Job Mode</p>
                    <p className="-mt-1 text-center">Remote</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Job Role</p>
                    <p className="-mt-1 text-center">Web Development</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Salary/Stipned</p>
                    <p className="-mt-1 text-center">₹5,000/Month</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Joining Date</p>
                    <p className="-mt-1 text-center">12/12/2003</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Ending Date</p>
                    <p className="-mt-1 text-center">12/12/2003</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Duration</p>
                    <p className="-mt-1 text-center">4 week</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 bg-blue-50 text-[#bb6b32]  left-[calc(50%-20px)]">
                WORK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
