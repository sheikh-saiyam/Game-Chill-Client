import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const reviewDetails = useLoaderData();
  const {
    title,
    gameCover,
    reviewDescription,
    rating,
    publishingYear,
    genre,
    userEmail,
    userName,
  } = reviewDetails;

  const handleAddToWatchList = () => {
    if (user && user.email) {
      fetch("http://localhost:5000/watchLists", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          reviewDetails,
          email: user.email,
          displayName: user.displayName,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            title: "Congratulation!",
            text: "Review Added To WatchList Successfully",
            icon: "success",
          });
          //   form.reset();
        });
    } else {
      // navigate("/login");
      Swal.fire({
        title: "Login Required",
        text: "You need to login to add reviews to the WatchList.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "OK",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to the login page
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-9/12 max-w-screen-xl mx-auto py-12">
        <div className="bg-bgPrimary mx-auto">
          <div>
            <img src={gameCover} alt={title} className="w-full h-[350px]" />
          </div>
          <div className="px-8 py-4 rounded-b-lg border-2 border-secondary border-t-0">
            <h2 className="text-3xl font-bold text-gray-700">{title}</h2>
            <div className="flex font-mono items-center gap-2 my-2 text-lg">
              <span className="font-semibold">Rating: {rating}</span>
              <i className="text-accent mr-1 flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.floor(rating)
                        ? "text-accent"
                        : "text-gray-300"
                    }
                  />
                ))}
              </i>
            </div>
            <p className="text-lg font-mono mb-2">
              <strong>Genre:</strong> {genre} || <strong>Published: </strong>
              {publishingYear}
            </p>
            <p className="mb-4">
              <strong>Review:</strong>{" "}
              <span className="text-lg">{reviewDescription}</span>
            </p>

            <div className="flex gap-4 flex-col justify-start text-left lg:flex lg:flex-row items-center lg:justify-between">
              <div className="w-full lg:w-fit">
                <button
                  onClick={handleAddToWatchList}
                  className="btn bg-accent w-full lg:btn-wide text-white text-md"
                >
                  Add to WatchList
                </button>
              </div>
              <hr className="border border-accent block lg:hidden my-2 w-full" />
              <div>
                <div className="bg-[#f8e4ee] p-2 rounded-lg">
                  <span className="text-sm text-gray-600">
                    <strong>Added By :</strong> {userName}
                  </span>
                  <p className="text-sm text-gray-600">
                    <strong>Email :</strong> {userEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
