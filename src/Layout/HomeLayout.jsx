import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighestRatedCard from "../components/Review/HighestRatedCard";
import { Typewriter } from "react-simple-typewriter";
import NewGames from "../components/ExtraSections/NewGames";
import GameNews from "../components/ExtraSections/GameNews";
import UpcomingGames from "../components/ExtraSections/UpcomingGames";

const HomeLayout = () => {
  const highestRatedGame = useLoaderData();
  return (
    <div className="bg-white dark:bg-darkBgPrimary">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
        <Banner></Banner>
        {/* Highest Rated Game Section */}
        <div>
          <div>
            <h1 className="dark:text-white mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
              Top-6 Highest
              <Typewriter
                words={[" Rated Game"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {highestRatedGame.map((gameReview) => (
              <HighestRatedCard
                key={gameReview._id}
                gameReview={gameReview}
              ></HighestRatedCard>
            ))}
          </div>
        </div>
        {/* Highest Rated Game Section */}

        {/* Latest Game news and update */}
        <div className="pt-24">
          <GameNews></GameNews>
        </div>
        {/* Latest Game news and update */}
        {/* top-10 new games */}
        <div className="pt-24">
          <NewGames></NewGames>
        </div>
        {/* top-10 new games */}
        {/* upcoming games */}
        <UpcomingGames></UpcomingGames>
        {/* upcoming games */}
      </div>
    </div>
  );
};

export default HomeLayout;
