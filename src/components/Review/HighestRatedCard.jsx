import { FaStar } from "react-icons/fa";

const HighestRatedCard = ({ gameReview }) => {
  const { title, gameCover, rating } = gameReview;
  return (
    <div>
      <img className="w-full h-64" src={gameCover} alt="Game Cover" />
      <div className="p-3 border-2 border-accent border-t-0">
        <h2 className="text-3xl text-center font-serif font-semibold ">
          {title}
        </h2>
        <div className="flex  justify-center font-mono items-center gap-2 my-2 text-lg">
          <span className="text-gray-700 font-semibold">Rating: {rating}</span>
          <i className="text-accent mr-1 flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.floor(rating) ? "text-accent" : "text-gray-300"
                }
              />
            ))}
          </i>
        </div>
        <div className="text-center font-mono">
          <button className="btn btn-sm w-1/2 text-white  font-semibold text-lg bg-accent rounded-full h-full">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
