import React from "react";
import HospitalLogo from "../../assets/logo/HospitalLogo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../store";
import useOutsideClick from "../../helper/useOutsideClick";
import DropdownMenu from "./DropdownMenu";
const Items = [
  {
    title: "Doctors",
    linkTo: "/doctors",
  },
  {
    title: "About",
    linkTo: "/about",
  },
  {
    title: "Contact",
    linkTo: "/contact",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const token = localStorage.getItem('token');
  const [menu, setMenu] = React.useState<boolean>(false);
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, menu, setMenu);
  const logoutUser = () => {
    setMenu(false);
    dispatch(logout());
  };

  return (
    <nav className=" fixed top-0 w-full z-50 bg-[#f8faff]  ">
      <div className="max-w-[1200px] h-[80px] m-auto flex items-center justify-between gap-[30px]">
        <Link className="flex-1 flex items-center gap-[5px]" to="/">
          <HospitalLogo />
          <h2 className="text-[18px] font-semibold rubik text-[#22306a] cursor-pointer">
            DOCTORS
          </h2>
        </Link>
        <div className="flex gap-[20px] items-center ">
          {Items &&
            Items.map((item) => (
              <NavLink
                end
                key={item?.title}
                className={({ isActive }) =>
                  isActive
                    ? "text-[17px] rubik link-style-active relative text-[#dd2853] cursor-pointer"
                    : "text-[17px] rubik link-style-inactive relative  text-[#22306a] cursor-pointer"
                }
                to={item.linkTo}
              >
                {item.title}
              </NavLink>
            ))}
        </div>
        {token ? (
          <div ref={wrapperRef} className="relative">
            <button onClick={() => setMenu(!menu)}>
              <img
                className="w-10 h-10 rounded-full cursor-pointer  relative "
                //  id="menu-button"
                src={
                  user?._doctor
                    ? user?._doctor?.avatar
                    : "https://media.istockphoto.com/id/1201514204/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=a-fxeEPpMhBWhYhlwUWKGx1g0YOC80tPGxBYsRy4m-U="
                }
                alt="pic"
              />
            </button>

            {/*********************DROPDOWN MENU********************/}
            <DropdownMenu
              menu={menu}
              setMenu={setMenu}
              logoutUser={logoutUser}
            />
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#dd2853]
         text-white rounded-lg px-[40px]
          w-[300px]
          py-[16px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
          >
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
