import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/Review/AllReviewCard";

const Reviews = () => {
  const allReviews = useLoaderData();
  console.log(allReviews);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
      <div>
        <h1 className="mb-12 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-mono">
          All Games Review
        </h1>
      </div>
      {/* <div className="flex gap-3 item-center justify-center my-6">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter By Genres
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {allReviews.map((review) => (
          <AllReviewCard key={review._id} review={review}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
