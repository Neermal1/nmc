import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import useFetchData from "@/hooks/useFetchData";

export default function FirstNav() {
  const { fetchedData } = useFetchData("company-profile");
  return (
    <div className="w-full h-full py-2 lg:py-3 bg-primary hidden lg:block">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-primary text-white">
        <div>
          <ul className="flex">
            <li className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold">
              <a target="_blank" href={fetchedData?.facebook}>
                <FaFacebook />
              </a>
            </li>
            <li className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold">
              <a target="_blank" href={fetchedData?.instagram}>
              <AiFillInstagram />
              </a>
            </li>
            <li className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold">
              <a target="_blank" href={fetchedData?.twitter}>
                <FaXTwitter />
              </a>
            </li>
            <li className="px-2 lg:px-3 text-sm md:text-base font-semibold">
              <a target="_blank" href={fetchedData?.youtube}>
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <Link
              href="/all-news"
              className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold"
            >
              News
            </Link>
            <Link
              href="/notice"
              className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold"
            >
              Notice
            </Link>
            <Link
              href="/gallery"
              className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold"
            >
              Gallery
            </Link>
            <Link
              href="/career"
              className="px-2 lg:px-3 border-r text-sm md:text-base font-semibold"
            >
              Career
            </Link>
            <Link
              href="/contact-us"
              className="px-2 lg:px-3 text-sm md:text-base font-semibold"
            >
              Contact us
            </Link>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
