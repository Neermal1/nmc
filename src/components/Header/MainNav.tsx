import Link from "next/link";
import DropdownItems from "./Dropdown";
import useFetchData from "@/hooks/useFetchData";
import AboutDropdown from "./AboutDropdown";

export default function MainNav() {
  const { fetchedData: departmentData } = useFetchData("departments");
  const { fetchedData: servicesData } = useFetchData("services");
  const { fetchedData: academicsData } = useFetchData("academics-program");

  return (
    <nav className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-2 lg:py-4 sticky top-0 bg-white hidden lg:block drop-shadow-lg !z-50">
      <div className="flex items-center justify-center">
        <ul className="flex space-x-4 lg:space-x-8">
          <NavItem name="Home" navigateTo="/" />
          <AboutDropdown />
          <DropdownItems
            dropdownName="Departments"
            slugroot="department"
            fetchedData={departmentData}
          />
          <DropdownItems
            dropdownName="Services"
            slugroot="service"
            fetchedData={servicesData}
          />
          <DropdownItems
            dropdownName="Academics"
            slugroot="academics"
            fetchedData={academicsData}
          />
          <NavItem name="Facilities" navigateTo="/facilities" />
          <NavItem name="Activities" navigateTo="/activities" />
          <NavItem name="Research" navigateTo="/research" />

          {/* <NavItem name="Journal" navigateTo="/journal" /> */}
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
