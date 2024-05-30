import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={css.loader}>
        <RotatingLines
          visible={true}
          height="60"
          width="60"
          color="grey"
          strokeColor="#c0e0e8"
          strokeWidth="5"
          animationDuration="0.5"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </>
  );
}
