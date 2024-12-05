import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import WatchListTable from "../components/Review/WatchListTable";
import logo from "../assets/logo.png";
const GameWatchList = () => {
  const watchListData = useLoaderData();
  const { user } = useContext(AuthContext);
  const filteredWatchListData = watchListData.filter(
    (watchList) => watchList.email === user.email
  );
  return (
    <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-14">
      {filteredWatchListData.length === 0 ? (
        <div className="text-center min-h-[450px] flex items-center justify-center border-accent border-2 rounded-2xl bg-bgPrimary w-10/12 mx-auto">
          <div className="space-y-4">
            <div>
              <img className="mx-auto h-44 w-fit" src={logo} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
                No WatchList Available
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif">
              Your All WatchLists
            </h1>
          </div>
          <div className="overflow-x-auto border-2">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="px-0">Image</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Publishing Year</th>
                  <th>Added By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredWatchListData.map((watchList, index) => (
                  <WatchListTable
                    key={watchList._id}
                    watchList={watchList}
                    idx={index}
                  ></WatchListTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default GameWatchList;
