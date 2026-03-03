import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    "Dashboard",
    "Projects",
    "Scans",
    "Schedule",
    "Notifications",
    "Settings",
    "Support",
  ];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-[#111111] text-gray-300 border-r border-gray-800 px-6 py-8 relative">

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <h1 className="text-lg font-semibold text-white">aps</h1>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">

        {navItems.map((item) => (
          <NavLink
            key={item}
            to={item === "Dashboard" ? "/dashboard" : "#"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item}
          </NavLink>
        ))}

      </nav>

      {/* USER SECTION */}
      <div className="absolute bottom-8 left-6 right-6 border-t border-gray-800 pt-4 text-sm">
        <p className="text-white">admin@edu.com</p>
        <p className="text-gray-500">Security Lead</p>
      </div>

    </div>
  );
}