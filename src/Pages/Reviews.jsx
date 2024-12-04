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
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {allReviews.map((review) => (
          <AllReviewCard key={review._id} review={review}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
