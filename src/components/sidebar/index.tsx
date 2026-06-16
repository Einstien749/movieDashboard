import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowTrendUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/favicon.svg";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>
      <div className="h-[10vh] flex flex-row items-center">
        <img src={Logo} className="w-[20px] h-[20px]" />{" "}
        <span className="mx-4">MovieHub</span>
      </div>
      <nav aria-label="Main navigation">
        <ul className="my-4">
          <li className="my-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold ml-2 px-2 py-2" : "text-gray-500 px-2 py-2 ml-2"
              }
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="ml-2">Home</span>
            </NavLink>
          </li>

          <li className="my-8">
            
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold ml-2 px-2 py-2" : "text-gray-500 ml-2 px-2 py-2"
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-2">Popular</span>
            </NavLink>
          </li>

          <li className="my-8">
            <NavLink
              to="/toprated"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold ml-2 px-2 py-2" : "text-gray-500 ml-2 px-2 py-2"
              }
            >
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <span className="ml-2">Top Rated</span>
            </NavLink>
          </li>

          <li className="my-8">
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold ml-2 px-2 py-2" : "text-gray-500 ml-2 px-2 py-2"
              }
            >
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-2">Upcoming</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
