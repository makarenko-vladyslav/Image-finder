import { FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import css from "./ImageCard.module.css";

export default function ImageCard({ item, toggleModal }) {
  return (
    <>
      <div>
        <div className={css.imageWrapper}>
          <img
            className={css.image}
            src={item.urls.small}
            alt={item.alt_description}
            onClick={() => toggleModal(item.urls.regular)}
          />
        </div>
        <div className={css.authorInfoWrapper}>
          <div className={css.autorInfo}>
            <img
              className={css.authorPhoto}
              src={item.user.profile_image.small}
              alt={item.user.name}
            />
            <p className={css.autor}>{item.user.name}</p>
            <a
              href={"https://www.instagram.com/" + item.user.instagram_username}
            >
              <FaInstagram className={css.instagram} />
            </a>
          </div>
          <div className={css.imgInfo}>
            <p className={css.text}>
              <FcLike />
              {item.likes}
            </p>
            <p className={css.text}>
              <MdOutlineAddPhotoAlternate />
              {item.created_at.substr(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
