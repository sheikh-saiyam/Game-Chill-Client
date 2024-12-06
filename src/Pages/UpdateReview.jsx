import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const reviewData = useLoaderData();
  const {
    _id,
    title,
    gameCover,
    reviewDescription,
    rating,
    publishingYear,
    genre,
  } = reviewData;
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const gameCover = form.gameCover.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const updatedReview = {
      title,
      gameCover,
      reviewDescription,
      rating,
      publishingYear,
      genre,
    };

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Congratulation!",
          text: "Review Updated Successfully",
          icon: "success",
        });
      });
  };
  return (
    <div>
      <div className="w-11/12 md:w-10/12 max-w-screen-xl mx-auto p-6 bg-accent shadow-md rounded-lg my-14">
        <h2 className="text-center text-4xl font-bold text-white mb-6">
          Update Review Details
        </h2>
        <form onSubmit={handleUpdateReview} className="space-y-6">
          {/* Game Title */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label className="text-lg font-semibold text-white">
                Game Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter the game title"
                defaultValue={title}
                required
                className="mt-1 w-full input input-bordered"
              />
            </div>

            {/* Game Cover Image URL */}
            <div>
              <label className="text-lg font-semibold text-white">
                Game Cover Image URL
              </label>
              <input
                type="text"
                name="gameCover"
                placeholder="https://example.com/image.jpg"
                defaultValue={gameCover}
                required
                className="mt-1 w-full input input-bordered"
              />
            </div>
          </div>

          {/* Review Description */}
          <div>
            <label className="block text-lg font-semibold text-white">
              Review Description
            </label>
            <textarea
              name="reviewDescription"
              placeholder="A detailed review of the game."
              defaultValue={reviewDescription}
              required
              rows="3"
              className="mt-1 text-lg block w-full textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Rating */}
            <div>
              <label className="block text-lg font-semibold text-white">
                Rating (1-10)
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Enter a rating (1-5)"
                defaultValue={rating}
                required
                min="1"
                max="5"
                step="0.1"
                className="mt-1 block w-full input input-bordered"
              />
            </div>

            {/* Publishing Year */}
            <div>
              <label className="block text-lg font-semibold text-white">
                Publishing Year
              </label>
              <input
                type="number"
                name="publishingYear"
                placeholder="Enter publishing year"
                defaultValue={publishingYear}
                required
                min="1990"
                max="2077"
                className="mt-1 block w-full input input-bordered"
              />
            </div>

            {/* Genres */}
            <div>
              <label className="block text-lg font-semibold text-white">
                Genre
              </label>
              <select
                name="genre"
                defaultValue={genre}
                required
                className="mt-1 block w-full input input-bordered"
              >
                <option value="">Select a genre</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
                <option value="Shooter">Shooter</option>
                <option value="Sports">Sports</option>
                <option value="Horror">Horror</option>
                <option value="Racing">Racing</option>
                <option value="Sandbox">Sandbox</option>
                <option value="MMO">MMO</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* User Email */}
            <div>
              <label className="block text-lg font-semibold text-white">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={user.email}
                readOnly
                className="mt-1 w-full input input-bordered"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block text-lg font-semibold text-white">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={user.displayName}
                readOnly
                className="mt-1 w-full input input-bordered"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full btn bg-white text-primary font-bold text-lg"
            >
              Submit Updated Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
