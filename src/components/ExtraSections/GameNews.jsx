import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import GameNewsCard from "./GameNewsCard";
import { Link } from "react-router-dom";

const GameNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    fetch("newsArticles.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsArticles(data);
      });
  }, []);

  return (
    <section>
      <h2 className="dark:text-white mb-10 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
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
        {newsArticles.slice(0, 3).map((article, index) => (
          <GameNewsCard key={article.id} article={article} index={index} />
        ))}
      </div>
      <div>
        <Link
          to={"/game-news"}
          className="btn dark:bg-darkAccent bg-accent w-1/2 flex mt-10 items-center justify-center mx-auto text-white rounded-lg"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default GameNews;
