import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[520px] "
        style={{
          backgroundImage: `url(https://i.ibb.co/jb95hTp/banner.jpg)`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-3 text-3xl font-bold">
              Download High Quality Images by creators
            </h1>
            <p className="mb-3">
              Over 2.4 million+ stock Images by our talented community
            </p>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
