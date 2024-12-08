import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewsTable = ({ myReview, idx, myReviews, setMyReviews }) => {
  const { _id, title, gameCover, rating, genre, publishingYear } = myReview;
  // delete review function
  const handleDeleteReview = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://saiyam-assignment10-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Review has been deleted.",
              icon: "success",
            });
          });
        const afterDeletedReview = myReviews.filter(
          (review) => id !== review._id
        );
        setMyReviews(afterDeletedReview);
      }
    });
  };
  return (
    <>
      <tr className="hover">
        <th>{idx + 1}</th>
        <td className="px-0">
          <img className="h-10 w-full sm:h-14 sm:w-32" src={gameCover} alt="" />
        </td>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{rating}</td>
        <td>{publishingYear}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-2 items-center">
            <Link
              to={`/update-review/${_id}`}
              className="btn btn-sm text-white font-semibold text-md bg-blue-500"
            >
              Update
            </Link>
            <button
              onClick={() => handleDeleteReview(_id)}
              className="btn btn-sm text-white font-semibold text-md bg-red-500 "
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyReviewsTable;
