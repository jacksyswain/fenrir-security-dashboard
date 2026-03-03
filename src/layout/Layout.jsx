import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex h-screen bg-white dark:bg-darkBg text-gray-900 dark:text-gray-200 transition-colors duration-300">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Bar */}
        <div className="flex justify-end items-center px-8 py-4 border-b border-gray-200 dark:border-darkBorder bg-white dark:bg-darkSurface">
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-4 py-1 rounded-lg border border-gray-300 dark:border-darkBorder hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-darkBg transition-colors duration-300">
          {children}
        </div>

      </div>
    </div>
  );
}