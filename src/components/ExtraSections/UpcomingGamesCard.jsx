const UpcomingGamesCard = ({ game }) => {
  const { image, title, releaseDate, description } = game;
  return (
    <div className="bg-[#fcebf1] rounded-lg grid ">
      <img src={image} alt={title} className="w-full h-48" />
      <div className="p-4">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-gray-800 text-sm mt-1">
          Release Date: {releaseDate}
        </p>
        <p className="text-gray-900 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default UpcomingGamesCard;
