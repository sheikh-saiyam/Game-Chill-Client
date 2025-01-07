import { useEffect, useState } from "react";
import GameNewsCard from "../components/ExtraSections/GameNewsCard";
import { Typewriter } from "react-simple-typewriter";

const LatestGameNews = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    fetch("newsArticles.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsArticles(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-16">
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
          {newsArticles.map((article, index) => (
            <GameNewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LatestGameNews;
