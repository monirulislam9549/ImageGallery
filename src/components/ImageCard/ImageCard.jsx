const ImageCard = (image) => {
  const { id } = image.image;
  const handleImageClick = () => {
    image.setUniqueId(id);
    image.setSelectedImage(image.image);
  };
  return (
    <div className="mt-10 max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl mx-auto w-full border-2">
      <label
        onClick={handleImageClick}
        htmlFor="my_modal_4"
        className="cursor-pointer"
      >
        <img
          className="h-80 w-full"
          src={image.image.urls.regular}
          alt="Property Image"
        />
      </label>

      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={image.image.user.profile_image.small}
            alt="Agent Image"
            className="mr-2 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">
              {image.image.user.name}
            </p>
            <p className="text-xs text-gray-600 italic">
              @{`${image.image.user ? image.image.user.username : "null"}`}
            </p>
          </div>
        </div>
        <div className="flex">
          <a className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </a>
          <p className="rounded-full  p-1 text-gray-600 font-semibold">
            {image.image.likes >= 1000
              ? (image.image.likes / 1000).toFixed(1) + "k"
              : image.image.likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
