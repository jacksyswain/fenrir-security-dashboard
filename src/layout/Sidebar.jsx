import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "#" },
    { name: "Scans", path: "#" },
    { name: "Schedule", path: "#" },
    { name: "Notifications", path: "#" },
    { name: "Settings", path: "#" },
    { name: "Support", path: "#" },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-darkSurface border-r border-gray-200 dark:border-darkBorder px-6 py-8 relative transition-colors duration-300">

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          aps
        </h1>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
              ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>

      {/* USER SECTION */}
      <div className="absolute bottom-8 left-6 right-6 border-t border-gray-200 dark:border-darkBorder pt-4 text-sm">
        <p className="text-gray-900 dark:text-white font-medium">
          admin@edu.com
        </p>
        <p className="text-gray-500 dark:text-darkMuted">
          Security Lead
        </p>
      </div>

    </div>
  );
}