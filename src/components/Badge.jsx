export default function Badge({ type, value }) {
  const styles = {
    critical:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800",

    high:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800",

    medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",

    low:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800",
  };

  return (
    <span
      className={`inline-flex items-center justify-center min-w-[24px] px-2 py-1 text-xs font-semibold rounded-md transition ${styles[type]}`}
    >
      {value}
    </span>
  );
}