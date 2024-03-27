import Link from "next/link";
import DropdownItems from "./Dropdown";
import useFetchData from "@/hook/useFetchData";

export default function MainNav() {
  const {fetchedData: departmentData} = useFetchData("departments")
  const {fetchedData: servicesData} = useFetchData("services")
  const {fetchedData: academicsData} = useFetchData("academics-program")


  return (
    <nav className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-2 lg:py-4 sticky top-0 bg-white z-50 hidden lg:block">
      <div className="flex items-center justify-center">
        <ul className="flex space-x-4 lg:space-x-8">
          <NavItem name="Home" navigateTo="/" />
          <NavItem name="About us" navigateTo="/about" />
          <DropdownItems dropdownName="Departments" slugroot="departments" fetchedData={departmentData}/>
          <DropdownItems dropdownName="Services" slugroot="services" fetchedData={servicesData}/>
          <NavItem name="Activities" navigateTo="/activities" />
          <NavItem name="Research" navigateTo="/research" />
          <DropdownItems dropdownName="Academics" slugroot="academics" fetchedData={academicsData} />
          <NavItem name="Journal" navigateTo="/journal" />
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ name, navigateTo }: any) => {
  return (
    <Link
      href={navigateTo}
      className="text-primary text-sm md:text-base lg:text-lg font-medium hover:text-primaryYellow cursor-pointer "
    >
      {name}
    </Link>
  );
};
