import { ReactNode } from "react";
import style from "./BlueButton.module.scss";

export default function BlueButton({
    children,
    ...props
}: { children: ReactNode } & React.HTMLProps<HTMLButtonElement> & {
        type: "submit";
    }) {
    return (
        <button {...props} className={style.blueButton}>
            {children}
        </button>
    );
}
