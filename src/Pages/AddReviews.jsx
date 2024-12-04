import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddReviews = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const gameCover = form.gameCover.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const newReview = {
      title,
      gameCover,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail,
      userName,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Congratulation!",
          text: "Review Added Successfully",
          icon: "success",
        });
        form.reset();
      });
  };
  return (
    <div>
      <div className="w-11/12 md:w-9/12 max-w-screen-xl mx-auto p-6 bg-accent shadow-md rounded-lg my-14">
        <h2 className="text-center text-4xl font-bold text-white mb-6">
          Add New Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter a rating (1-10)"
                required
                min="1"
                max="10"
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
                placeholder="Enter publishing year (e.g., 2024)"
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
                required
                className="mt-1 block w-full input input-bordered"
              >
                <option value="">Select a genre</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Sports">Sports</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Platformer">Platformer</option>
                <option value="Fighting">Fighting</option>
                <option value="Horror">Horror</option>
                <option value="Racing">Racing</option>
                <option value="Music">Music</option>
                <option value="Sandbox">Sandbox</option>
                <option value="Survival">Survival</option>
                <option value="MMO">MMO</option>
                <option value="Indie">Indie</option>
                <option value="Open World">Open World</option>
                <option value="Stealth">Stealth</option>
                <option value="Tactical">Tactical</option>
                <option value="Visual Novel">Visual Novel</option>
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
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
