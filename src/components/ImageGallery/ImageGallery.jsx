import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";

const ImageGallery = forwardRef(({ items, toggleModal }, ref) => {
  const NEW_IMAGE_INDEX = items.length - 19;
  const isNewImage = (index) => index === NEW_IMAGE_INDEX;

  return (
    <ul className={css.list}>
      {items.map((item, index) => (
        <li
          className={css.listItem}
          key={item.id}
          ref={isNewImage(index) ? ref : null}
        >
          <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
});

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
