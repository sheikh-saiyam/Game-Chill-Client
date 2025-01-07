import { Typewriter } from "react-simple-typewriter";
import UpcomingGamesCard from "./UpcomingGamesCard";
import { Link } from "react-router-dom";

const UpcomingGames = () => {
  const games = [
    {
      id: 1,
      title: "Grand Theft Auto 6",
      releaseDate: "October 22, 2025",
      description:
        "The highly anticipated sequel to the legendary open-world action-adventure game.",
      image:
        "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg",
    },
    {
      id: 2,
      title: "Elder Scrolls VI",
      releaseDate: "June 10, 2025",
      description:
        "The next chapter in the iconic Elder Scrolls series, promising a massive open-world experience.",
      image:
        "https://gaming-cdn.com/images/products/2668/orig/the-elder-scrolls-vi-pc-game-cover.jpg?v=1688120250",
    },
    {
      id: 3,
      title: "Racer Xtreme",
      releaseDate: "February 20, 2025",
      description:
        "High-speed racing with stunning graphics. gameplay packed with  challenges",
      image:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2634950/header.jpg?t=1732587399",
    },
  ];

  return (
    <div className="mt-24">
      <section>
        <div className="mx-auto px-6">
          <h2 className="dark:text-white mb-8 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
            Upcoming{" "}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <UpcomingGamesCard key={game.id} game={game} />
            ))}
          </div>

          <div>
            <Link
              to={"/upcoming-games"}
              className="btn dark:bg-darkAccent bg-accent w-1/2 flex mt-10 items-center justify-center mx-auto text-white rounded-lg"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingGames;
