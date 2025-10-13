import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const linkClasses = ({ isActive }) =>
    `flex items-center justify-center md:justify-start gap-3 
     py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
     ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`;

  const iconClasses = "w-6 h-6 flex-shrink-0";

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul>
          <NavLink className={linkClasses} to={"/admin-dashboard"}>
            <img
              src={assets.home_icon}
              alt="Dashboard"
              className={iconClasses}
            />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink className={linkClasses} to={"/all-appointments"}>
            <img
              src={assets.appointment_icon}
              alt="Appointments"
              className={iconClasses}
            />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink className={linkClasses} to={"/add-doctor"}>
            <img
              src={assets.add_icon}
              alt="Add Doctor"
              className={iconClasses}
            />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink className={linkClasses} to={"/doctor-list"}>
            <img
              src={assets.people_icon}
              alt="Doctors List"
              className={iconClasses}
            />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul>
          <NavLink className={linkClasses} to={"/doctor-dashboard"}>
            <img
              src={assets.home_icon}
              alt="Dashboard"
              className={iconClasses}
            />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink className={linkClasses} to={"/doctor-appointments"}>
            <img
              src={assets.appointment_icon}
              alt="Appointments"
              className={iconClasses}
            />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink className={linkClasses} to={"/doctor-profile"}>
            <img
              src={assets.people_icon}
              alt="Profile"
              className={iconClasses}
            />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
