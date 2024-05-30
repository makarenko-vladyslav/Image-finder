import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
    onClick: () => void;
};

export default function LoadMoreBtn(props: LoadMoreBtnProps) {
    return (
        <>
            <button className={css.btn} onClick={props.onClick}>
                Load more
            </button>
        </>
    );
}
