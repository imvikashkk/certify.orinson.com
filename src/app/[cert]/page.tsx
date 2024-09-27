"use client";
import React from "react";
import { Teko } from "next/font/google";
import LogoImg from "../../../public/logo-img.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const teko = Teko({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400", "700"], // Specify the weights you need
  display: "swap", // Controls how the font is displayed
});

const initialData = {
  fullname: "",
  email: "",
  phone_number: "",
  gender: "",
  dob: "",
  national_id_card: "",
  national_id_card_number: "",
  current_or_last_academic: "",
  current_or_last_college_university: "",
  passing_year: "",
  job_type: "",
  job_mode: "",
  job_role:"",
  stipend_salary: "",
  start_date: "",
  end_date: "",
  duration: "",
};

const Page = ({ params: { cert } }: { params: { cert: string } }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleCertificate = async (cert: string) => {
      try {
        const res = await fetch(`https://api-certify.orinson.com/certificate/${cert}`);

        const response = await res.json();
        if (response.data) {
          setData(response.data);
        } else {
          setError("Invalid Certificate!")
          // router.replace("/");
        }
      } catch (error) {
        alert("Error: Internal Issue!" )
        // router.replace("/");
      } finally {
        setLoading(false);
      }
    };

    handleCertificate(cert);
  }, [cert, router]);

  if (loading) {
    return (
      <section className="h-screen bg-[#211b95]  flex justify-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  if(error !== ""){
    return (
      <section className="h-screen bg-[#211b95]  flex justify-center items-center">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Alert</h2>
            <p className="mb-6 text-red-600">{error}</p>
            <button
              className="bg-blue-500 text-white float-end px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {setError(""); router.replace("/")}}
            >
              Okay
            </button>
          </div>
        </div>
      </section>
    )
  }



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
            <p className="-mt-1 sm:mt-[3px] text-xl font-semibold">{cert}</p>
          </div>

          <div className="mt-2 pb-3 flex flex-col min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:gap-x-2 min-[360px]:justify-evenly">
            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Name:</p>
              <p className="-mt-2 min-[360px]:mt-[3px] font-semibold">
                {data.fullname}
              </p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Email:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.email}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Mobile:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.phone_number}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Gender:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.gender}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">DOB:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.dob}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">National ID:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.national_id_card}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">ID Number:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.national_id_card_number}</p>
            </div>
          </div>

          <div className="pt-3  relative border-t flex flex-col min-[360px]:flex-row min-[360px]:flex-wrap min-[360px]:gap-x-2 min-[360px]:justify-evenly border-b border-black pb-2 ">
            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Course/Branch:</p>
              <p className="-mt-2 min-[360px]:mt-[3px] ">{data.current_or_last_academic}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">School/College:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.current_or_last_college_university}</p>
            </div>

            <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-1">
              <p className="text-gray-500 text-lg">Passing Year:</p>
              <p className="-mt-2 min-[360px]:mt-[3px]">{data.passing_year}</p>
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
                    <p className="-mt-1 text-center">{data.job_type}</p>
                  </div>

                  <div className="flex flex-col items-center ">
                    <p className="text-gray-500 text-lg">Job Mode</p>
                    <p className="-mt-1 text-center">{data.job_mode}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Job Role In</p>
                    <p className="-mt-1 text-center">{data.job_role}</p>
                  </div>

                  {
                    data.stipend_salary && (
                      <div className="flex flex-col items-center">
                      <p className="text-gray-500 text-lg">Salary/Stipned</p>
                      <p className="-mt-1 text-center">{data.stipend_salary}</p>
                    </div>
                    )
                  }
                 

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Joining Date</p>
                    <p className="-mt-1 text-center">{data.start_date}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Ending Date</p>
                    <p className="-mt-1 text-center">{data.end_date}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-lg">Duration</p>
                    <p className="-mt-1 text-center">{data.duration}</p>
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
