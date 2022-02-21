import classNames from "classnames";

export default function SkillCard({ name, level, image, imageClassName }) {
  return (
    <div className="bg-white shadow-card rounded-lg p-6 flex items-center">
      <img src={image} alt="" className={classNames("mr-6", imageClassName)} />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 mt-1">{level}</p>
      </div>
    </div>
  );
}
