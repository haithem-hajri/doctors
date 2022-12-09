import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const DropdownMenu = (props: any) => {
  const { menu, setMenu, logoutUser } = props;
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div
      className={
        menu
          ? "transition-all duration-1000 absolute right-0  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          : "hidden"
      }
    >
      {user?._doctor ? (
        <div className="py-1">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <Link
            onClick={() => setMenu(false)}
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100  "
          >
            Profil
          </Link>
          <Link
            onClick={() => setMenu(false)}
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100  "
          >
            Mes Patients
          </Link>
          <Link
            to="#"
            onClick={() => setMenu(false)}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Paramètres
          </Link>
        </div>
      ) : (
        <div className="py-1">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <Link
            onClick={() => setMenu(false)}
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100  "
          >
            Mes Docteurs
          </Link>
          <Link
            onClick={() => setMenu(false)}
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100  "
          >
            Profil
          </Link>
          <Link
            to="#"
            onClick={() => setMenu(false)}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Paramètres
          </Link>
        </div>
      )}
      <div className="py-1">
        <Link
          to="#"
          onClick={logoutUser}
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
        >
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
