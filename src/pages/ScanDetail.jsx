import Layout from "../layout/Layout";

export default function ScanDetail() {
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

  return (
    <Layout>
      {/* Top Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">New Scan</h1>
        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg dark:border-gray-700">
            Export Report
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Stop Scan
          </button>
        </div>
      </div>

      {/* Progress + Stepper Section */}
      <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow mb-6">
        <div className="flex items-center gap-10">

          {/* Circular Progress */}
          <div className="relative w-24 h-24">
            <div className="w-24 h-24 rounded-full border-8 border-gray-300 border-t-primary flex items-center justify-center">
              <span className="text-lg font-semibold">0%</span>
            </div>
            <p className="text-center text-sm mt-2">In Progress</p>
          </div>

          {/* Step Tracker */}
          <div className="flex gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-full text-sm ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Metadata Row */}
        <div className="grid grid-cols-6 gap-6 mt-6 text-sm">
          <div>
            <p className="text-gray-500">Scan Type</p>
            <p>Grey Box</p>
          </div>
          <div>
            <p className="text-gray-500">Targets</p>
            <p>google.com</p>
          </div>
          <div>
            <p className="text-gray-500">Started At</p>
            <p>Nov 22, 09:00AM</p>
          </div>
          <div>
            <p className="text-gray-500">Credentials</p>
            <p>2 Active</p>
          </div>
          <div>
            <p className="text-gray-500">Files</p>
            <p>Control.pdf</p>
          </div>
          <div>
            <p className="text-gray-500">Checklists</p>
            <p className="text-primary font-semibold">40/350</p>
          </div>
        </div>
      </div>

      {/* Console + Findings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Live Console */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Live Scan Console</p>
            <span className="text-sm text-green-500">Running...</span>
          </div>

          <div className="bg-black text-green-400 p-4 rounded-lg h-72 overflow-y-auto text-xs font-mono">
            <p>[09:00:00] Starting reconnaissance...</p>
            <p>[09:01:00] Target online. Performing port scan...</p>
            <p>[09:02:00] Apache httpd 2.4.65 detected on port 80</p>
            <p>[09:03:00] Login page discovered</p>
            <p>[09:04:00] Testing credentials...</p>
            <p>[09:05:00] Exploring API endpoints...</p>
            <p>[09:06:00] IDOR vulnerability suspected</p>
          </div>
        </div>

        {/* Finding Log */}
        <div className="bg-white dark:bg-darkSurface rounded-xl shadow p-6">
          <p className="font-semibold mb-4">Finding Log</p>

          <div className="space-y-4">
            {findings.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 dark:border-gray-700"
              >
                <span
                  className={`px-3 py-1 text-xs rounded-full ${item.color}`}
                >
                  {item.severity}
                </span>

                <h3 className="font-semibold mt-2">
                  {item.title}
                </h3>

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

      {/* Bottom Status Bar */}
      <div className="bg-white dark:bg-darkSurface mt-6 p-4 rounded-xl shadow flex justify-between text-sm">
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