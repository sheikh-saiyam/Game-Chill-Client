import { Fade } from "react-awesome-reveal";

const GameNewsCard = ({ article, index }) => {
  const { image, title, description, date } = article;
  return (
    <Fade>
      <div
        className={`bg-white rounded-lg space-y-4 md:space-y-0 md:flex items-center gap-4 border-2 p-4 ${
          index % 2 !== 0 ? "md:flex-row-reverse " : ""
        }`}
      >
        <div className="md:w-3/6">
          <img src={image} alt={title} className="w-full h-56 rounded-md" />
        </div>
        <div className="md:w-3/6">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="text-base text-gray-800 my-3">{description}</p>
          <div className="flex justify-between items-center gap-1">
            <button className="btn dark:bg-darkAccent bg-accent w-6/12 text-white rounded-lg">
              Read More
            </button>
            <p className="text-sm text-gray-600">Date: {date}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default GameNewsCard;
