import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import SmallScreenNavbar from "./SmallScreenHeader";

const Header = () => {
  return (
    <>
      <Ribbon />
      <Navbar />
      <SmallScreenNavbar />
    </>
  );
};

export default Header;
