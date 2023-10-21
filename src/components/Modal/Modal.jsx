const Modal = ({ selectedImage }) => {
  console.log(selectedImage?.tags[0].source.subtitle);
  return (
    <>
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />
      <div className="modal ">
        <div className="w-11/12 max-w-5xl h-auto relative bg-white p-2">
          <div className="flex items-center justify-between">
            <div className="flex ">
              <img
                src={selectedImage?.user.profile_image.small}
                alt="Agent Image"
                className="mr-2 rounded-full object-cover"
              />
              <div className="">
                <p className="text-sm font-medium text-gray-800">
                  {selectedImage?.user.name}
                </p>
                <p className="text-xs text-gray-600 italic">
                  @{selectedImage?.user.username}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>

              <a
                href={selectedImage?.links.download}
                download={selectedImage?.links.download}
              >
                Download
              </a>
            </div>
          </div>
          <div className="">
            <img
              className="w-full h-80"
              src={selectedImage?.urls.regular}
              alt=""
            />
            <div className="bg-white ">
              <h3 className="font-bold text-lg ">
                {selectedImage?.description}
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white">
            <div className="flex  gap-10">
              <div>
                <h1>Likes</h1>
                <p>{selectedImage?.likes}</p>
              </div>
              <div className="">
                <h1>Download</h1>
              </div>
              <div className="">
                <h1>Featured In</h1>
                <p>Editorial</p>
              </div>
            </div>
            <div className="flex gap-4 p-2">
              <button className="border-2 py-1 px-4 flex items-center  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                Share
              </button>
              <button className="border-2 py-1 px-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Info
              </button>
              <button className="border-2 py-1 px-4 flex m-auto ">...</button>
            </div>
          </div>
          <p>{selectedImage?.alt_description}</p>
          <div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-3">
                Published on{" "}
                {selectedImage?.topic_submissions["business-work"].approved_on
                  ? new Date(
                      selectedImage.topic_submissions[
                        "business-work"
                      ].approved_on
                    )
                      .toISOString()
                      .split("T")[0]
                  : "N/A"}
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p className="ml-3">{selectedImage?.tags[0].source.subtitle}</p>
            </div>
            <div></div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my_modal_4"
              className="btn btn-circle absolute -top-10 -right-5"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
