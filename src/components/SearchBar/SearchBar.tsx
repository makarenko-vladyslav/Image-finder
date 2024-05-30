import NightMode from "../NightMode/NightMode";
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

import css from "./SearchBar.module.css";
import { FormEvent } from "react";

type SearchBarProps = {
    onSubmit: (newTopic: string) => void;
    nightMode: boolean;
    toggleNightMode: () => void;
};

const SearchBar = (props: SearchBarProps) => {
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const form = evt.target as HTMLFormElement;
        const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;

        !topic.trim()
            ? toast.error("Your should to enter text for image search!")
            : props.onSubmit(topic);

        form.reset();
    };

    return (
        <>
            <header className={css.header}>
                <NightMode
                    nightMode={props.nightMode}
                    toggleNightMode={props.toggleNightMode}
                />

                <form className={css.form} onSubmit={handleSubmit}>
                    <div className={css.inputWrapper}>
                        <input
                            className={css.input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            name="topic"
                        />

                        <button className={css.btn} type="submit">
                            <IoSearch />
                        </button>
                    </div>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 400,
                        style: {
                            border: "1px solid #ff4800",
                            padding: "16px",
                            color: "#ff4800",
                        },
                    }}
                />
            </header>
        </>
    );
};

SearchBar.displayName = "SearchBar";

export default SearchBar;
