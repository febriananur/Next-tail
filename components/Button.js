import classNames from "classnames";

export default function Button({ className, variant, children, pill, href }) {
  const variants = {
    "outline-yellow": `border border-yellow text-yellow-500 hover:bg-yellow-500 hover:text-black`,
    yellow: "bg-yellow-500 text-black hover:bg-yellow-600 ",
    black: "bg-black text-white hover:bg-opacity-90",
  };
  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classNames(
        "py-3 px-8 font-semibold text-lg inline-block transition",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
