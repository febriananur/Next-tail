import classNames from "classnames";

export default function SectionParagraph({ left, children }) {
  return (
    <p
      className={classNames(
        "text-lg text-gray-600 font-sans mt-2",
        !left && " text-center"
      )}
    >
      {children}
    </p>
  );
}
