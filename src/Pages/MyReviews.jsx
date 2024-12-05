import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import MyReviewsTable from "./MyReviewsTable";
import logo from "../assets/logo.png";
const MyReviews = () => {
  const myReviewsData = useLoaderData();
  const { user } = useContext(AuthContext);
  const filteredMyReviewsData = myReviewsData.filter(
    (p) => p.userEmail === user.email
  );
  const [myReviews, setMyReviews] = useState(filteredMyReviewsData);
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-14">
      {filteredMyReviewsData.length === 0 ? (
        <div className="text-center min-h-[450px] flex items-center justify-center border-accent border-2 rounded-2xl bg-bgPrimary w-10/12 mx-auto">
          <div className="space-y-4">
            <div>
              <img className="mx-auto h-44 w-fit" src={logo} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                No Review Available
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
              Your All Reviews
            </h1>
          </div>
          <div className="overflow-x-auto border-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="px-0">Image</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myReviews.map((myReview, index) => (
                  <MyReviewsTable
                    key={myReview._id}
                    myReview={myReview}
                    myReviews={myReviews}
                    setMyReviews={setMyReviews}
                    idx={index}
                  ></MyReviewsTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
