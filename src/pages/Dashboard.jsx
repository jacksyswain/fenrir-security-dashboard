import Layout from "../layout/Layout";
import StatCard from "../components/StatCard";
import StatusChip from "../components/StatusChip";
import Badge from "../components/Badge";
import { scans } from "../data/scans";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard label="Critical" value="86" color="bg-red-500" />
        <StatCard label="High" value="16" color="bg-orange-500" />
        <StatCard label="Medium" value="26" color="bg-yellow-500" />
        <StatCard label="Low" value="16" color="bg-green-500" />
      </div>

      <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">
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
      </div>
    </Layout>
  );
}