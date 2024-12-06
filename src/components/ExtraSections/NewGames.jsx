import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const NewGames = ({ newGamesData }) => {
  return (
    <div>
      <h1 className="mb-8 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
        Top-10{" "}
        <Typewriter
          words={["Newest Game"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="border rounded-xl p-4">
        <Marquee pauseOnHover={true} speed={50}>
          {newGamesData.slice(0, 10).map((newGame) => (
            <div key={newGame._id}>
              <div className="flex">
                <div className="border p-4 rounded-lg mr-4 md:mr-4">
                  <Link to={"/reviews"}>
                    <img
                      className="w-full h-28"
                      src={newGame.gameCover}
                      alt=""
                    />
                  </Link>
                  <h1 className="text-center text-xl font-serif mt-1">
                    Publishing Year {newGame.publishingYear}
                  </h1>
                </div>
              </div>
            </div>
          ))}{" "}
        </Marquee>
      </div>
    </div>
  );
};

export default NewGames;
