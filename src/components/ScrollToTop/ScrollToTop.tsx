import { LuMoveUp } from "react-icons/lu";

import css from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className={css.btn} onClick={scrollToTop} type="button">
        <LuMoveUp />
      </button>
    </>
  );
}
