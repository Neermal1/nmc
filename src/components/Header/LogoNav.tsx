/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function LogoNav() {
  return (
    <div className="w-full h-full px-8 md:px-16 lg:px-24 xl:px-32 hidden lg:block">
      <div className="py-2 border-b-2 border-black flex justify-between items-center">
        {/* Logo  */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="w-auto h-full">
            <img src="/NMC_logo.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-auto h-full">
            <h1 className="text-primary text-lg lg:text-2xl font-bold">
              Nepal Medical Collge
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="px-4 py-2 text-sm lg:text-base bg-secondary rounded-full text-primary font-medium">
            Lab Report
          </button>
          <button className="px-4 py-2 text-sm lg:text-base bg-secondary rounded-full text-primary font-medium">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
