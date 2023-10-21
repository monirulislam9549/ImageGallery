import { useContext, useEffect, useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { SearchContext } from "../../Providers/SearchProvider";
import Modal from "../Modal/Modal";

const accessKey = import.meta.env.VITE_REACT_APP_ACCESS_KEY;

const AllImage = () => {
  const [images, setImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { selectedSuggestion, searchQuery } = useContext(SearchContext);
  const [uniqueId, setUniqueId] = useState(null);

  useEffect(() => {
    const query = selectedSuggestion || searchQuery || "office";
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${query}&client_id=${accessKey}&uniqueId=${uniqueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.results);
      });
  }, [selectedSuggestion, searchQuery, uniqueId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          setUniqueId={setUniqueId}
          setSelectedImage={setSelectedImage}
        ></ImageCard>
      ))}
      <Modal selectedImage={selectedImage}></Modal>
    </div>
  );
};

export default AllImage;
