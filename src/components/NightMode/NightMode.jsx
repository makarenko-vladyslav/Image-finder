import { HiOutlineSun } from "react-icons/hi2";
import { LuMoon } from "react-icons/lu";

import css from "./NightMode.module.css";

export default function NightMode({ toggleNightMode, nightMode }) {
  return (
    <>
      <div
        className={nightMode ? css.wrapperDark : css.wrapperLight}
        onClick={toggleNightMode}
      >
        <button
          // className={nightMode ? css.darkThema : css.lightThema}
          className={nightMode ? css.circleDark : css.circleLight}
        >
          <i className={css.icon}>
            {nightMode ? (
              <LuMoon className={css.moon} />
            ) : (
              <HiOutlineSun className={css.sun} />
            )}
          </i>
        </button>
      </div>
    </>
  );
}
