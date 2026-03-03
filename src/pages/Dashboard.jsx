import Layout from "../layout/Layout";
import StatCard from "../components/StatCard";
import StatusChip from "../components/StatusChip";
import Badge from "../components/Badge";
import { scans as initialScans } from "../data/scans";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [scans, setScans] = useState(initialScans);
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredScans = scans
    .filter((scan) =>
      scan.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((scan) =>
      filterStatus === "All" ? true : scan.status === filterStatus
    );

  const handleNewScan = () => {
    const newScan = {
      id: scans.length + 1,
      name: "New Scan " + (scans.length + 1),
      type: "Greybox",
      status: "Scheduled",
      progress: 0,
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      lastScan: "Now",
    };
    setScans([newScan, ...scans]);
  };

  return (
    <Layout>

      {/* ORG INFO BAR */}
      <div className="bg-white dark:bg-darkSurface p-4 rounded-xl shadow mb-6 flex justify-between text-sm">
        <div className="flex gap-6">
          <p><span className="text-gray-500">Org:</span> Project X</p>
          <p><span className="text-gray-500">Owner:</span> Nammagiri</p>
          <p>Total Scans: 100</p>
          <p>Scheduled: 1000</p>
          <p>Rescans: 100</p>
          <p>Failed Scans: 100</p>
        </div>
        <p className="text-gray-500">10 mins ago</p>
      </div>

      {/* SEVERITY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard label="Critical" value="86" change="+2% increase than yesterday" color="text-red-500" />
        <StatCard label="High" value="16" change="+0.9% increase than yesterday" color="text-orange-500" />
        <StatCard label="Medium" value="26" change="-0.9% decrease than yesterday" color="text-yellow-500" />
        <StatCard label="Low" value="16" change="+0.9% increase than yesterday" color="text-green-500" />
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">

        {/* TOOLBAR */}
        <div className="flex justify-between items-center mb-6">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scans by name or type..."
            className="border p-2 rounded-lg w-1/2 dark:bg-transparent dark:border-gray-700"
          />

          <div className="flex gap-3">
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border px-3 py-2 rounded-lg dark:bg-transparent dark:border-gray-700"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Scheduled</option>
              <option>Failed</option>
            </select>

            <button
              onClick={handleNewScan}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              + New Scan
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500 border-b dark:border-gray-700">
            <tr>
              <th className="py-3">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerability</th>
              <th>Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {filteredScans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="border-t dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-4 font-medium">{scan.name}</td>
                <td>{scan.type}</td>
                <td><StatusChip status={scan.status} /></td>

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

        {/* FOOTER INFO */}
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredScans.length} of {scans.length} Scans
        </div>

      </div>
    </Layout>
  );
}