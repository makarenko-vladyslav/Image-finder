import { HiOutlineSun } from "react-icons/hi2";
import { LuMoon } from "react-icons/lu";

import css from "./NightMode.module.css";

type NightModeProps = {
    toggleNightMode: () => void;
    nightMode: boolean;
};

export default function NightMode(props: NightModeProps) {
    return (
        <>
            <div
                className={props.nightMode ? css.wrapperDark : css.wrapperLight}
                onClick={props.toggleNightMode}
            >
                <button className={props.nightMode ? css.circleDark : css.circleLight}>
                    <i className={css.icon}>
                        {props.nightMode ? (
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
