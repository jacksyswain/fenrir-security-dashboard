export default function StatCard({ label, value, color }) {
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