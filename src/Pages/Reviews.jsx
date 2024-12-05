import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/Review/AllReviewCard";
import { useState } from "react";

const Reviews = () => {
  const allReviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(allReviews);
  const [filteredReview, SetFilteredReview] = useState(allReviews);

  const handleFilteredReview = () => {
    const filtered = filteredReview.filter(
      (p) => p.genre === filteredReview.genre
    );
    SetFilteredReview(filtered);
  };

  const handleSortByRating = () => {
    const sort = [...sortedReviews].sort((a, b) => b.rating - a.rating);
    setSortedReviews(sort);
  };

  const handleSortByYear = () => {
    const sort = [...sortedReviews].sort(
      (a, b) => b.publishingYear - a.publishingYear
    );
    setSortedReviews(sort);
  };
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
      <div className="flex gap-3 items-center justify-between my-6">
        <div>
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-accent text-white m-1"
              >
                Filter By Genres
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <button
                  className="btn w-full btn-sm bg-bgPrimary border-accent border mb-1"
                  onClick={handleFilteredReview}
                >
                  Filter
                </button>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-mono">
          All Games Review
        </h1>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-accent text-white m-2"
          >
            Sort By Rating Or Year
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <button
              className="btn w-full btn-sm bg-bgPrimary border-accent border mb-1"
              onClick={() => setSortedReviews(allReviews)}
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
        {filteredReview &&
          sortedReviews.map((review) => (
            <AllReviewCard key={review._id} review={review}></AllReviewCard>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
