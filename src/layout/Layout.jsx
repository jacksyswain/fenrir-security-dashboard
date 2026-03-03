import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-darkBg">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}