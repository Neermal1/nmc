/* eslint-disable @next/next/no-img-element */
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import AboutDropdown from "./AboutDropdown";
import DropdownItems from "./Dropdown";
import MediaDropdown from "./MediaDropdown";
import ServiceDropdown from "./ServiceDropdown";

export default function Navbar() {
  const { fetchedData: departmentData } = useFetchData("departments");
  const { fetchedData: academicsData } = useFetchData("academics-program");
  return (
    <div className="w-full h-full px-8 md:px-16 lg:px-24 py-2 hidden lg:block sticky top-0 bg-white shadow-lg z-50">
      <div className="flex justify-between items-center">
        {/* Logo  */}
        <Link href="/" className="flex items-center space-x-2 lg:space-x-4">
          <div className="w-auto h-full">
            <img
              src="/NMC_logo.png"
              alt=""
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="w-auto h-full">
            <h1 className="text-primary text-lg lg:text-2xl font-bold">
              Nepal Medical College
            </h1>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center">
            <ul className="flex space-x-6">
              <AboutDropdown />
              <DropdownItems
                dropdownName="Departments"
                slugroot="departments"
                fetchedData={departmentData}
              />
              <DropdownItems
                dropdownName="Academics"
                slugroot="academics"
                fetchedData={academicsData}
              />
              <ServiceDropdown />
              <MediaDropdown />
            </ul>
          </div>
          <Link
            href="http://reports.nmcth.edu/"
            className="px-6 py-2 text-base bg-secondary rounded-full text-primary font-medium hover:bg-primary hover:text-primaryYellow transition duration-300"
            target="__blank"
          >
            Lab Report
          </Link>
        </div>
      </div>
    </div>
  );
}
