export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-gray-800 p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-8">aps</h1>

      <nav className="space-y-4 text-gray-600 dark:text-gray-300">
        <p className="font-semibold text-primary">Dashboard</p>
        <p>Projects</p>
        <p>Scans</p>
        <p>Schedule</p>
        <p>Notifications</p>
        <p>Settings</p>
        <p>Support</p>
      </nav>

      <div className="absolute bottom-6 text-sm text-gray-500">
        admin@edu.com
      </div>
    </div>
  );
}