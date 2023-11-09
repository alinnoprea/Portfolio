import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import PropTypes from "prop-types";

const SideBar = () => {
  return (
    <div className="container">
      <div className="fixed top-0 right-0 h-12  w-15 m-6 flex flex-row items-center justify-between space-x-4 bg-primary text-white">
        <img
          src="https://i.imgur.com/cHSFuCY.jpg"
          alt="Profile Picture"
          className="h-12"
        />
        <h1>Alin Oprea</h1>
      </div>

      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  justify-center bg-primary text-secondary">
        <SideBarIcon icon={<FaFire size="52" />} href="home" id="Home-1" />
        <SideBarIcon icon={<BsPlus size="52" />} href="About" id="About-1" />
        <SideBarIcon
          icon={<BsFillLightningFill size="52" />}
          href="Projects"
          id="Projects-1"
        />
        <SideBarIcon icon={<FaPoo size="52" />} href="Contact" id="Contact-1" />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, id }) => (
  <div className="sidebar-icon group">
    {icon}
    <a id={id} className="sidebar-tooltip group-hover:scale-100">
      {id}
    </a>
  </div>
);

SideBarIcon.propTypes = {
  icon: PropTypes.node, // You can specify a more specific type if necessary
  href: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default SideBar;
