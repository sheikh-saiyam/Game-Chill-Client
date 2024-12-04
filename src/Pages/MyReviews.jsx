import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MyReviews = () => {
  const myReviewsData = useLoaderData();
  const { user } = useContext(AuthContext);
  const filteredMyReviewsData = myReviewsData.filter(
    (p) => p.userEmail === user.email
  );
  return (
    <div>
      {filteredMyReviewsData.map((review) => (
        <h1 key={review._id}>Game Title:{review.title}</h1>
      ))}
    </div>
  );
};

export default MyReviews;
