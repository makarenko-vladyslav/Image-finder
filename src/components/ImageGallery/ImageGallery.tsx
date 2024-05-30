import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef, Ref } from "react";
import { Image } from "../../images-api";

type ImageGalleryProps = {
    items: Image[];
    toggleModal: (imageUrl: string) => void;
    ref?: Ref<HTMLLIElement>;
};

const ImageGallery = forwardRef<HTMLLIElement, ImageGalleryProps>(
    ({ items, toggleModal }, ref) => {
        const NEW_IMAGE_INDEX = items.length - 19;
        const isNewImage = (index: number) => index === NEW_IMAGE_INDEX;

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
    }
);

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
