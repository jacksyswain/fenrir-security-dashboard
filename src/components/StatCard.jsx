export default function StatCard({ label, value, change, color }) {
  return (
    <div className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder rounded-xl p-6 transition">

      {/* Top Label */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-darkMuted">
          {label} Severity
        </p>

        {/* Small color indicator */}
        <div className={`w-3 h-3 rounded-full ${color}`} />
      </div>

      {/* Main Value */}
      <h2 className="text-3xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
        {value}
      </h2>

      {/* Change Text */}
      {change && (
        <p className={`text-sm mt-2 ${color}`}>
          {change}
        </p>
      )}

    </div>
  );
}