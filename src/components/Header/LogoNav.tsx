/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

export default function LogoNav() {
  const router = useRouter();
  return (
    <div className="w-full h-full px-8 md:px-16 lg:px-24 xl:px-32 hidden lg:block">
      <div className="py-2 border-b-2 border-black flex justify-between items-center">
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
              Nepal Medical Collge
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* <button className="px-4 py-2 text-sm lg:text-base bg-secondary rounded-full text-primary font-medium hover:bg-primary hover:text-primaryYellow transition duration-300">
            Lab Report
          </button> */}
          <Link
            href="https://reports.nmcth.edu/"
            className="px-8 py-2 text-sm lg:text-base bg-secondary rounded-full text-primary font-medium hover:bg-primary hover:text-primaryYellow transition duration-300"
            target="__blank"
          >
            Lab Report
          </Link>
        </div>
      </div>
    </div>
  );
}
