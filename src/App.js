import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCards from "./components/ImageCards";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios(
        `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${term}&image_type=photo`
      );

      setImages(res.data.hits);
      setIsLoading(false);
    };

    fetchImages();
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl text-center mx-auto mt-32">No images found</h1>
      )}

      {isLoading ? (
        <h1 className="text-3xl text-center mx-auto mt-32">Loading data...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCards key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
