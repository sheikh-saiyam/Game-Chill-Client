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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },

      // reviews sections all routes
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/game-watchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
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
]);

export default router;
