export default function Badge({ color, value }) {
  return (
    <span className={`${color} text-white px-2 py-1 rounded-md text-xs`}>
      {value}
    </span>
  );
}