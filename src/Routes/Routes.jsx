import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Reviews from "../Pages/Reviews";
import AddReviews from "../Pages/AddReviews";
import MyReviews from "../Pages/MyReviews";
import GameWatchList from "../Pages/GameWatchList";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../Pages/ReviewDetails";
import UpdateReview from "../Pages/UpdateReview";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () =>
          fetch(
            "https://saiyam-assignment10-server.vercel.app/highest-rated-games"
          ),
      },

      // reviews sections all routes
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: async () => {
          const allReviewsRes = await fetch(
            "https://saiyam-assignment10-server.vercel.app/reviews"
          );
          const allReviews = await allReviewsRes.json();

          const sortedRatingReviewsRes = await fetch(
            "https://saiyam-assignment10-server.vercel.app/sorted-rating-reviews"
          );
          const sortedRatingReviews = await sortedRatingReviewsRes.json();

          const sortedYearReviewsRes = await fetch(
            "https://saiyam-assignment10-server.vercel.app/sorted-year-reviews"
          );
          const sortedYearReviews = await sortedYearReviewsRes.json();

          return { allReviews, sortedRatingReviews, sortedYearReviews };
        },
      },
      // review details route
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://saiyam-assignment10-server.vercel.app/reviews/${params.id}`
          ),
      },
      // review details route
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>
          </PrivateRoute>
        ),
      },
      // update review route
      {
        path: "/update-review/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://saiyam-assignment10-server.vercel.app/reviews/${params.id}`
          ),
      },
      // update review route
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://saiyam-assignment10-server.vercel.app/reviews"),
      },
      {
        path: "/game-watchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://saiyam-assignment10-server.vercel.app/watchlists"),
      },
      // reviews sections all routes

      //   authentication
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      //   authentication
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
