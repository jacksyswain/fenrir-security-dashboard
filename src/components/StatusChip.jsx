export default function StatusChip({ status }) {
  const styles = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800",

    Scheduled:
      "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-darkBorder",

    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition ${styles[status]}`}
    >
      {status}
    </span>
  );
}