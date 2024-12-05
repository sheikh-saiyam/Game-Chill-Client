const WatchListTable = ({ watchList, idx }) => {
  const { title, gameCover, rating, publishingYear, genre, userName } =
    watchList.reviewDetails;
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
        <td>{userName}</td>
        <td>
          <div className="flex sm:flex-row sm:flex flex-col gap-2 items-center">
            <button
              //   onClick={() => handleDeleteReview(_id)}
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
