import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function FirstNav() {
  return (
    <div className="w-full h-full py-2 lg:py-3 bg-primary hidden lg:block">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-primary text-white">
        <div>
          <ul className="flex">
            <li className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold">
              <AiFillInstagram />
            </li>
            <li className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold">
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li className="px-2 lg:px-3 text-sm md:text-base lg:text-lg font-semibold">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <Link
              href="/"
              className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold"
            >
              News
            </Link>
            <Link
              href="/"
              className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold"
            >
              Notice
            </Link>
            <Link
              href="/"
              className="px-2 lg:px-3 border-r text-sm md:text-base lg:text-lg font-semibold"
            >
              Gallery
            </Link>
            <Link
              href="/"
              className="px-2 lg:px-3 text-sm md:text-base lg:text-lg font-semibold"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
