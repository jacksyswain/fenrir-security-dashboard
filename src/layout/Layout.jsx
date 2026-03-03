import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-white dark:bg-darkBg text-gray-900 dark:text-gray-200">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}