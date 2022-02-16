export default function ({ className, variant, children }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-yellow": `border border-yellow text-yellow-500`,
    yellow: "bg-yellow-500 text-black",
  };
  const pickedVariant = variants[variant];

  return <a className={`rounded-full py-3 px-8 font-semibold text-lg inline-block ${pickedVariant} ${addClassName}`}>{children}</a>;
}
