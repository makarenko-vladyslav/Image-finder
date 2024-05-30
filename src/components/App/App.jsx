import { useEffect, useRef, useState } from "react";
import { fetchImages } from "../../images-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./App.module.css";

export default function App() {
  const [images, setimages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMore, setloadMore] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [nightMode, setNightMode] = useState(true);

  const firstNewImageRef = useRef();

  useEffect(() => {
    firstNewImageRef.current &&
      firstNewImageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [images]);

  useEffect(() => {
    const fetchNewImages = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(topic, page);
        setimages((prevImages) => [...prevImages, ...data.results]);
        setPage((prevPage) => prevPage + 1);
        if (!data.total_pages) {
          return setError(true);
        }
        page >= data.total_pages ? setloadMore(false) : setloadMore(true);
      } catch (error) {
        setError(true);
        setloadMore(false);
      } finally {
        setLoading(false);
        setShouldFetch(false);
      }
    };

    shouldFetch && fetchNewImages();
  }, [shouldFetch]);

  const handleImages = (newTopic) => {
    setimages([]);
    setTopic(newTopic);
    setPage(1);
    setShouldFetch(true);
  };

  const handleLoadMore = () => {
    setloadMore(false);

    setShouldFetch(true);
  };

  function handleModal(imageUrl) {
    setModal(!modal);
    setModalImage(imageUrl);
  }

  function toggleNightMode() {
    setNightMode(!nightMode);
  }

  useEffect(() => {
    if (nightMode) {
      document.body.style.backgroundColor = "#2C2C2F";
      document.body.style.color = "#fbfbfb";
    } else {
      document.body.style.backgroundColor = "#fbfbfb";
      document.body.style.color = "#2e2f42";
    }
  }, [nightMode]);

  return (
    <>
      <SearchBar
        onSubmit={handleImages}
        nightMode={nightMode}
        toggleNightMode={toggleNightMode}
      ></SearchBar>
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {images.length > 0 && (
            <>
              <ImageGallery
                items={images}
                toggleModal={handleModal}
                ref={firstNewImageRef}
              />
            </>
          )}
          {loading && <Loader />}
          {loadMore && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
          {loadMore && <ScrollToTop />}

          <ImageModal
            isOpen={modal}
            toggleModal={handleModal}
            imageUrl={modalImage}
          ></ImageModal>
        </>
      )}
    </>
  );
}
