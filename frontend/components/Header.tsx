import { HiMiniEnvelope } from "react-icons/hi2";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <img
        className="w-full min-h-20 max-h-44 object-cover"
        src="./Banner.jpg"
        alt="logo"
      />
      <div className="flex justify-between items-end mt-[-70px] mx-[3%] sm:mx-[15%]">
        <div className="flex items-end">
          <img className="mb-[-5px]" src="./Avatar.png" alt="logo" />
          <h2 className="hidden ml-4 lg:inline-block">Ricardo Cooper</h2>
        </div>
        <div className="flex justify-between gap-4">
          <a href="mailto:">
            <button className="text-lightPrimary flex border-2 rounded py-[5px] px-[10px] items-center">
              <HiMiniEnvelope />
              <span className="ml-2">Message</span>
            </button>
          </a>
          <a href="tel:">
            <button className="text-lightPrimary flex border-2 rounded py-[5px] px-[10px] items-center">
              <MdCall />
              <span className="ml-2">Call</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
