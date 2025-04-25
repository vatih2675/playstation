export default function StopwatchButton({ click, color, title, icon }) {
  return (
    <button
      onClick={click}
      className={`w-full px-2 py-1 bg-gradient-to-b ${color} hover:bg-gradient-to-t transition-all duration-300 hover:shadow-md text-white/60 hover:text-white`}
    >
      <i className={`bi-${icon} me-1`}></i>
      {title}
    </button>
  );
};