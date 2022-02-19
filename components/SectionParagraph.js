export default function SectionParagraph({ left, children }) {
  return (
    <p
      className={`text-lg text-gray-600 font-sans ${
        !left ? " text-center" : ""
      } mt-2`}
    >
      {children}
    </p>
  );
}
