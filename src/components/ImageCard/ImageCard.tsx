import { FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Image } from "../../images-api";

import css from "./ImageCard.module.css";

type ImageCardProps = {
    item: Image;
    toggleModal: (imageUrl: string) => void;
};

const ImageCard = (props: ImageCardProps) => {
    return (
        <>
            <div>
                <div className={css.imageWrapper}>
                    <img
                        className={css.image}
                        src={props.item.urls.small}
                        alt={props.item.alt_description}
                        onClick={() => props.toggleModal(props.item.urls.regular)}
                    />
                </div>
                <div className={css.authorInfoWrapper}>
                    <div className={css.autorInfo}>
                        <img
                            className={css.authorPhoto}
                            src={props.item.user.profile_image.small}
                            alt={props.item.user.name}
                        />
                        <p className={css.autor}>{props.item.user.name}</p>
                        <a
                            href={
                                "https://www.instagram.com/" +
                                props.item.user.instagram_username
                            }
                        >
                            <FaInstagram className={css.instagram} />
                        </a>
                    </div>
                    <div className={css.imgInfo}>
                        <p className={css.text}>
                            <FcLike />
                            {props.item.likes}
                        </p>
                        <p className={css.text}>
                            <MdOutlineAddPhotoAlternate />
                            {props.item.created_at.slice(0, 10)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

ImageCard.displayName = "ImageCard";

export default ImageCard;
