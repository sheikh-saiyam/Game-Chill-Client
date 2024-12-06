import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/Review/AllReviewCard";
import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Reviews = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const allReviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(allReviews);
  const [filteredReview, setFilteredReview] = useState(allReviews);
  const [selectedGenre, setSelectedGenre] = useState("All");
  // Filter reviews by genre
  const handleFilteredReview = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setFilteredReview(allReviews);
    } else {
      const filtered = sortedReviews.filter((p) => p.genre === genre);
      setFilteredReview(filtered);
    }
  };

  // Sort reviews by rating
  const handleSortByRating = () => {
    const sort = [...sortedReviews].sort((a, b) => b.rating - a.rating);
    setSortedReviews(sort);
    setFilteredReview(sort);
  };

  // Sort reviews by year
  const handleSortByYear = () => {
    const sort = [...sortedReviews].sort(
      (a, b) => b.publishingYear - a.publishingYear
    );
    setSortedReviews(sort);
    setFilteredReview(sort);
  };
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center font-mono">
        All Games Review
      </h1>
      <div className="flex gap-3 items-center justify-between my-6">
        <div>
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-accent text-white m-1 flex items-center"
              >
                Filter By Genres <IoIosArrowDropdown className="text-lg" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow grid grid-cols-2 gap-2"
              >
                <button
                  className={`btn ${
                    selectedGenre === "All" ? "bg-accent text-white" : ""
                  }`}
                  onClick={() => handleFilteredReview("All")}
                >
                  All
                </button>
                {[
                  "Action",
                  "RPG",
                  "Adventure",
                  "Shooter",
                  "Sports",
                  "MMO",
                  "Horror",
                  "Racing",
                  "Sandbox",
                ].map((genre) => (
                  <button
                    key={genre}
                    className={`btn ${
                      selectedGenre === genre ? "bg-accent text-white" : ""
                    }`}
                    onClick={() => handleFilteredReview(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </ul>
            </div>
          </div>
          <div></div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-accent text-white m-2 flex items-center"
          >
            Sort By Rating Or Year <IoIosArrowDropdown className="text-lg" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <button
              className="btn w-full btn-sm bg-bgPrimary border-accent border mb-1"
              onClick={() => {
                setSortedReviews(allReviews);
                setFilteredReview(allReviews);
              }}
            >
              Default View
            </button>
            <button
              className="btn w-full btn-sm bg-bgPrimary border-accent border mb-1"
              onClick={handleSortByRating}
            >
              By Rating ⭐
            </button>
            <button
              className="btn w-full btn-sm bg-bgPrimary border-accent border"
              onClick={handleSortByYear}
            >
              Publishing Year
            </button>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
        {filteredReview.map((review) => (
          <AllReviewCard key={review._id} review={review}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
