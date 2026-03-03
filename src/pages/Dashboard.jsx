import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const scans = [
    {
      id: 1,
      name: "Web App Servers",
      type: "Greybox",
      status: "Completed",
      progress: 100,
      critical: 5,
      high: 12,
      medium: 23,
      low: 18,
      lastScan: "4d ago",
    },
    {
      id: 2,
      name: "IoT Devices",
      type: "Blackbox",
      status: "Failed",
      progress: 10,
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
      lastScan: "3d ago",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-darkBg">

      {/* SIDEBAR */}
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

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-auto">

        {/* STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="Critical" value="86" color="bg-red-500" />
          <StatCard label="High" value="16" color="bg-orange-500" />
          <StatCard label="Medium" value="26" color="bg-yellow-500" />
          <StatCard label="Low" value="16" color="bg-green-500" />
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">

          <div className="flex justify-between mb-4">
            <input
              placeholder="Search scans..."
              className="border p-2 rounded-lg w-1/3 dark:bg-transparent dark:border-gray-700"
            />

            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              + New Scan
            </button>
          </div>

          <table className="w-full text-left">
            <thead className="text-sm text-gray-500">
              <tr>
                <th className="py-2">Scan Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Vulnerabilities</th>
                <th>Last Scan</th>
              </tr>
            </thead>

            <tbody>
              {scans.map((scan) => (
                <tr
                  key={scan.id}
                  onClick={() => navigate(`/scan/${scan.id}`)}
                  className="border-t cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="py-4">{scan.name}</td>
                  <td>{scan.type}</td>

                  <td>
                    <StatusChip status={scan.status} />
                  </td>

                  <td>
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                  </td>

                  <td className="space-x-2">
                    <Badge color="bg-red-500" value={scan.critical} />
                    <Badge color="bg-orange-500" value={scan.high} />
                    <Badge color="bg-yellow-500" value={scan.medium} />
                    <Badge color="bg-green-500" value={scan.low} />
                  </td>

                  <td>{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-white dark:bg-darkSurface rounded-xl p-6 shadow">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">{label}</p>
        <div className={`w-3 h-3 rounded-full ${color}`} />
      </div>
      <h2 className="text-3xl font-semibold mt-4">{value}</h2>
    </div>
  );
}

function StatusChip({ status }) {
  const styles = {
    Completed: "bg-green-100 text-green-600",
    Scheduled: "bg-gray-200 text-gray-600",
    Failed: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

function Badge({ color, value }) {
  return (
    <span className={`${color} text-white px-2 py-1 rounded-md text-xs`}>
      {value}
    </span>
  );
}