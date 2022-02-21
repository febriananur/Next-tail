import classNames from "classnames";

export default function NavItem({ scheme, href, children }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100 ",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={classNames("font-semibold transition", pickedScheme)}
      >
        {children}
      </a>
    </li>
  );
}
