import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllReviewCard = ({ review }) => {
  const { _id, title, gameCover, rating, genre, publishingYear } = review;
  return (
    <div>
      <div className="h-full sm:flex item-center">
        <div className="sm:w-1/2">
          <img className="w-full h-[300px]" src={gameCover} alt="Game Cover" />
        </div>
        <div className="p-4 border-2 border-accent sm:border-l-0 sm:w-1/2 sm:grid sm:place-content-center ">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-2">{title}</h2>
            <span className="text-gray-700 font-semibold text-lg">
              Genre: {genre}
            </span>
          </div>
          <div className="flex font-mono items-center gap-2 my-2 text-lg ">
            <span className="text-gray-700 font-semibold">
              Rating: {rating}
            </span>
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
          <span className="text-gray-700 font-semibold">
            Publishing Year: {publishingYear}
          </span>
          <div className="font-mono mt-2">
            <Link
              to={`/review/${_id}`}
              className="btn w-full text-white  font-semibold text-lg bg-accent h-full"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviewCard;
