import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighestRatedCard from "../components/Review/HighestRatedCard";

const HomeLayout = () => {
  const highestRatedGame = useLoaderData();
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
      <Banner></Banner>

      {/* Highest Rated Game Section */}
      <div>
        <div>
          <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
            Top-6 Highest Rated Game
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {highestRatedGame
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6)
            .map((gameReview) => (
              <HighestRatedCard
                key={gameReview._id}
                gameReview={gameReview}
              ></HighestRatedCard>
            ))}
        </div>
      </div>
      {/* Highest Rated Game Section */}
    </div>
  );
};

export default HomeLayout;
