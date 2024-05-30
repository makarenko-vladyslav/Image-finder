import { BiCommentError } from "react-icons/bi";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={css.error}>
        Oops, something went wrong. Please, try again leter <BiCommentError />
      </p>
    </>
  );
}
