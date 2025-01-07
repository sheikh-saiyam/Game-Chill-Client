import { Typewriter } from "react-simple-typewriter";
import UpcomingGamesCard from "../components/ExtraSections/UpcomingGamesCard";
import { useEffect, useState } from "react";

const UpcomingGamesPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("upcomingGames.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-16">
      <section>
        <div className="mx-auto px-6">
          <h2 className="dark:text-white mb-10 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
            All Upcoming{" "}
            <Typewriter
              words={["Games"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <UpcomingGamesCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingGamesPage;
