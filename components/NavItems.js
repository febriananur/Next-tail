export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-opacity-60 font-semibold hover:text-opacity-100 transition">
        {children}
      </a>
    </li>
  );
}
