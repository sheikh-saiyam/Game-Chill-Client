import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/Review/AllReviewCard";
import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Loader from "../components/Loader/Loader";

const Reviews = () => {
  // for showing loader 0.3s
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  // for showing loader 0.3s

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const { allReviews, sortedRatingReviews, sortedYearReviews } =
    useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(allReviews);
  const [filteredReview, setFilteredReview] = useState(allReviews);
  const [selectedGenre, setSelectedGenre] = useState("");
  useEffect(() => {
    fetch(`https://saiyam-assignment10-server.vercel.app/filtered-genres?genre=${selectedGenre}`)
      .then((res) => res.json())
      .then((data) => setFilteredReview(data));
  }, [selectedGenre]);

  // Filter reviews by genre
  const handleFilteredReview = (genre) => {
    setSelectedGenre(genre);
  };

  // Sort reviews by rating
  const handleSortByRating = () => {
    setSortedReviews(sortedRatingReviews);
    setFilteredReview(sortedRatingReviews);
  };

  // Sort reviews by year
  const handleSortByYear = () => {
    setSortedReviews(sortedYearReviews);
    setFilteredReview(sortedYearReviews);
  };
  return (
    <div>
      {showLoader ? (
        <Loader></Loader>
      ) : (
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
                        selectedGenre === "" ? "bg-accent text-white" : ""
                      }`}
                      onClick={() => {
                        handleFilteredReview("");
                      }}
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
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn h-full bg-accent text-white m-2 flex items-center"
              >
                Sort By <span className="hidden sm:block">Rating Or Year</span>{" "}
                <IoIosArrowDropdown className="text-lg" />
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
            {(allReviews, sortedReviews, filteredReview).map((review) => (
              <AllReviewCard key={review._id} review={review}></AllReviewCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
