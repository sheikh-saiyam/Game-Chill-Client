import Swal from "sweetalert2";

const WatchListTable = ({ watchList, idx, myWatchList, setMyWatchList }) => {
  const { _id } = watchList;
  const { title, gameCover, rating, publishingYear, genre } =
    watchList.reviewDetails;

  const handleWatchListDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Remove WatchList",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://saiyam-assignment10-server.vercel.app/watchlists/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Removed!",
              text: "Your WatchList has been Removed.",
              icon: "success",
            });
          });
        const afterRemovedWatchList = myWatchList.filter(
          (watchList) => id !== watchList._id
        );
        setMyWatchList(afterRemovedWatchList);
      }
    });
  };
  return (
    <>
      <tr className="hover">
        <th>{idx + 1}</th>
        <td className="px-0">
          <img className="h-10 sm:h-14 w-full" src={gameCover} alt="" />
        </td>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{rating}</td>
        <td>{publishingYear}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-2 items-center">
            <button
              onClick={() => handleWatchListDelete(_id)}
              className="btn btn-sm text-white font-semibold text-md bg-red-500 "
            >
              Remove
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default WatchListTable;
