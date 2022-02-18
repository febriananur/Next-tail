export default function ProjectItem({ name, description, img }) {
  return (
    <article className="text-center ">
      <img src={img} className="w-full rounded-lg shadow-lg" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </article>
  );
}
