import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import useFetchData from "@/hooks/useFetchData";

export default function Ribbon() {
  const { fetchedData } = useFetchData("company-profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-full py-2 lg:py-3 bg-primary z-50">
      <div className="px-8 md:px-16 lg:px-24 flex items-center justify-between bg-primary text-white">
        <div className="hidden xl:block">
          <div className="flex items-center divide-x">
            {fetchedData?.facebook && (
              <SocialMedia link={fetchedData?.facebook} Icon={FaFacebook} />
            )}
            {fetchedData?.instagram && (
              <SocialMedia
                link={fetchedData?.instagram}
                Icon={AiFillInstagram}
              />
            )}

            {fetchedData?.twitter && (
              <SocialMedia link={fetchedData?.twitter} Icon={FaTwitter} />
            )}
            {fetchedData?.youtube && (
              <SocialMedia link={fetchedData?.youtube} Icon={FaYoutube} />
            )}
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex">
            <NavItem href="/news">News</NavItem>
            <NavItem href="/notices">Notice</NavItem>
            <NavItem href="/career">Career</NavItem>
            <Link
              href="https://jnmcth.nmcth.edu/"
              target="__blank"
              className="border-r-[1px] border-white px-2 text-sm"
            >
              Journal
            </Link>
            <NavItem href="/contact-us" noBorder>
              Contact us
            </NavItem>
          </div>
        </div>

        {/* for small screen  */}
        <div className="xl:hidden w-full">
          <div className="w-full flex items-center justify-between">
            <div className="flex">
              <Link
                href="https://reports.nmcth.edu/"
                target="__blank"
                className="text-sm font-medium cursor-pointer text-nowrap border-r pr-2"
              >
                Lab Report
              </Link>
              <NavItem href="/notices" noBorder>
                Notices
              </NavItem>
            </div>
            <div>
              {/* Hamburger Menu Icon from react icon  and on clicking that icon, flex-col the list of Navitem  */}
              <div
                className="text-white text-xl cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <FaCircleInfo />
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className=" text-white mt-4">
              <div className="grid grid-cols-4 gap-y-2  items-center">
                <Link
                  href="https://jnmcth.nmcth.edu/"
                  target="__blank"
                  className={`  pl-2 text-sm font-medium cursor-pointer text-nowrap`}
                >
                  Journal
                </Link>
                <NavItem href="/news" noBorder>
                  News
                </NavItem>
                <NavItem href="/career" noBorder>
                  Career
                </NavItem>
                <NavItem href="/contact-us" noBorder>
                  Contact us
                </NavItem>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ href, children, noBorder }: any) => (
  <Link href={href}>
    <div
      className={`px-2 lg:px-3 ${
        noBorder ? "" : "border-r"
      } text-sm font-medium cursor-pointer text-nowrap`}
    >
      {children}
    </div>
  </Link>
);

const SocialMedia = ({ link, Icon, noBorder }: any) => (
  <div className={`text-sm md:text-base font-semibold px-2`}>
    <a target="_blank" href={link}>
      <Icon />
    </a>
  </div>
);
