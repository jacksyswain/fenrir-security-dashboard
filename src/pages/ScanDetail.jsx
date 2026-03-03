import Layout from "../layout/Layout";
import { useState } from "react";

export default function ScanDetail() {
  const [activeTab, setActiveTab] = useState("activity");
  const [stopped, setStopped] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ];

  const findings = [
    {
      severity: "Critical",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/profile",
      description:
        "Time-based blind SQL injection confirmed on user-controlled input during authentication flow.",
      color: "bg-red-100 text-red-600",
    },
    {
      severity: "High",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/auth/login",
      description:
        "Authenticated low-privilege user accessed metadata of other users.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      severity: "Medium",
      title: "Broken Authentication Rate Limiting",
      endpoint: "/api/search",
      description:
        "No effective rate limiting detected on login attempts.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const handleStop = () => {
    setStopped(true);
    setProgress(100);
  };

  const handleExport = () => {
    alert("Report exported successfully!");
  };

  const activeStepIndex = Math.floor((progress / 100) * steps.length);

  return (
    <Layout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Scan Private Assets</h1>

        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="border px-4 py-2 rounded-lg dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Export Report
          </button>

          <button
            onClick={handleStop}
            disabled={stopped}
            className={`px-4 py-2 rounded-lg text-white ${
              stopped ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {stopped ? "Stopped" : "Stop Scan"}
          </button>
        </div>
      </div>

      {/* PROGRESS + STEPPER */}
      <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow mb-6">

        <div className="flex items-center gap-12">

          {/* Circular Progress */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-8 border-gray-300 border-t-primary flex items-center justify-center">
              <span className="text-lg font-semibold">
                {progress}%
              </span>
            </div>
            <p className="text-sm mt-2">
              {stopped ? "Completed" : "In Progress"}
            </p>
          </div>

          {/* Step Tracker */}
          <div className="flex gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full text-sm ${
                  index === activeStepIndex
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* METADATA */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 text-sm">
          <Meta label="Scan Type" value="Grey Box" />
          <Meta label="Targets" value="google.com" />
          <Meta label="Started At" value="Nov 22, 09:00AM" />
          <Meta label="Credentials" value="2 Active" />
          <Meta label="Files" value="Control.pdf" />
          <Meta label="Checklists" value="40/350" highlight />
        </div>
      </div>

      {/* CONSOLE + FINDINGS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Console */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">

          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setActiveTab("activity")}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === "activity"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Activity Log
            </button>

            <button
              onClick={() => setActiveTab("verification")}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === "verification"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Verification Loops
            </button>
          </div>

          <div className="bg-black text-green-400 p-4 rounded-lg h-72 overflow-y-auto text-xs font-mono">
            {activeTab === "activity" ? (
              <>
                <p>[09:00:00] Starting reconnaissance...</p>
                <p>[09:01:00] Target online. Performing port scan...</p>
                <p>[09:02:00] Apache httpd detected</p>
                <p>[09:03:00] Login page discovered</p>
              </>
            ) : (
              <>
                <p>Verifying SQL injection payload...</p>
                <p>Testing IDOR vulnerability...</p>
                <p>Validation completed successfully.</p>
              </>
            )}
          </div>
        </div>

        {/* Findings */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Finding Log</h2>

          <div className="space-y-4">
            {findings.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 dark:border-gray-700 hover:shadow-md transition"
              >
                <span className={`px-3 py-1 text-xs rounded-full ${item.color}`}>
                  {item.severity}
                </span>

                <h3 className="font-semibold mt-2">{item.title}</h3>

                <p className="text-primary text-sm mt-1">
                  {item.endpoint}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER STATUS */}
      <div className="bg-white dark:bg-darkSurface mt-6 p-4 rounded-xl shadow flex flex-wrap gap-6 text-sm">
        <p>Sub-agents: 0</p>
        <p>Parallel Executions: 2</p>
        <p>Operations: 1</p>
        <p>Critical: 0</p>
        <p>High: 0</p>
        <p>Medium: 0</p>
        <p>Low: 0</p>
      </div>

    </Layout>
  );
}

function Meta({ label, value, highlight }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className={highlight ? "text-primary font-semibold" : ""}>
        {value}
      </p>
    </div>
  );
}