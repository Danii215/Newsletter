"use client";
import BlueButton from "../BlueButton/BlueButton";

export default function Form({ style }: { style: string }) {
    return (
        <form className={style}>
            <div>
                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@company.com"
                />
            </div>
            <BlueButton type="submit">
                Subscribe to monthly newsletter
            </BlueButton>
        </form>
    );
}
