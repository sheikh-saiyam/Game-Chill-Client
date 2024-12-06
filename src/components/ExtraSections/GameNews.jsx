import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const GameNews = () => {
  // Example state for storing news articles
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const newsData = [
      {
        id: 1,
        title: "Grand Theft Auto V: The Latest DLC Takes You to New Heights!",
        description:
          "Rockstar Games has released a new DLC for GTA V, introducing new vehicles, missions, and an exciting expansion to the multiplayer experience.",
        image:
          "https://assets.newatlas.com/dims4/default/de91311/2147483647/strip/true/crop/2560x1344+0+48/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fgta-5-review.jpg&na.image_optimisation=0",
        date: "2024-12-06",
      },
      {
        id: 2,
        title: "Minecraft Update Brings New Biomes and Blocks!",
        description:
          "The latest Minecraft update introduces new biomes, blocks, and creatures to the game, making exploration more exciting than ever before.",
        image:
          "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft.jpg",
        date: "2024-12-05",
      },
      {
        id: 3,
        title: "God of War Ragnarök: New DLC Expands the Mythical Adventure!",
        description:
          "A new DLC for God of War Ragnarök has been released, adding additional quests and deeper lore to the Norse mythology saga.",
        image:
          "https://blog.playstation.com/tachyon/2023/12/56935f822f365f2cae0282333bf9f2e60dcb4211.jpg",
        date: "2024-12-04",
      },
      {
        id: 4,
        title: "EA Sports FC 24: The Ultimate Football Experience!",
        description:
          "EA Sports FC 24 has received a major patch update that improves gameplay mechanics, adds new leagues, and enhances the overall football experience.",
        image:
          "https://www.fifaultimateteam.it/en/wp-content/uploads/2023/07/cover-ultimate-edition-easports-fc-24.jpg",
        date: "2024-12-03",
      },
      {
        id: 5,
        title:
          "Forza Horizon 5: New Cars and Challenges Coming to the Horizon!",
        description:
          "Forza Horizon 5 adds new cars and an all-new set of challenges in the latest expansion, keeping the open-world racing experience fresh and exciting.",
        image:
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg?t=1730830713",
        date: "2024-12-02",
      },
      {
        id: 6,
        title: "Red Dead Redemption 2: The Next Big Update Is Here!",
        description:
          "The Red Dead Redemption 2 online mode is receiving a significant update, featuring new story missions, activities, and a fresh bounty system.",
        image:
          "https://www.stealthgaming.net/wp-content/uploads/2023/11/Red-Dead-Redemption-2-feature-image.jpg.webp",
        date: "2024-12-01",
      },
    ];

    setNewsArticles(newsData);
  }, []);

  return (
    <section>
      <h2 className="dark:text-white mb-8 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
        Latest Game{" "}
        <Typewriter
          words={["News and Updates"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="space-y-8">
        {newsArticles.map((article, index) => (
          <div
            key={article.id}
            className={`bg-white rounded-lg space-y-4 md:space-y-0 md:flex items-center gap-4 border-2 p-4 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-3/6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 rounded-md"
              />
            </div>
            <div className="md:w-3/6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-base text-gray-800 my-3">
                {article.description}
              </p>
              <div className="flex justify-between items-center gap-1">
                <button className="btn dark:bg-darkAccent bg-accent w-6/12 text-white rounded-lg">
                  Read More
                </button>
                <p className="text-sm text-gray-600">Date: {article.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameNews;
