export default function StatusChip({ status }) {
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