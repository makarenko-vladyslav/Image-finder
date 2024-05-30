import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, toggleModal, imageUrl }) {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "65%",
            height: "90%",
            border: "transparent",
            borderRadius: "4px",
            outline: "none",
            padding: "0",
          },
        }}
      >
        <img className={css.img} src={imageUrl}></img>
      </Modal>
    </div>
  );
}
