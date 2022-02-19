export default function ProfileTitle({ left, children }) {
  return (
    <h2
      className={`text-2xl font-semibold font-mono ${
        !left ? " text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
