"use client";
import BlueButton from "../BlueButton/BlueButton";
import { useRouter } from "next/navigation";
import { FormEventHandler, SetStateAction } from "react";
import { useState } from "react";
import { z } from "zod";

export default function Form({ style }: { style: string }) {
    const router = useRouter();
    const emailSchema = z.string().email();

    const [value, setValue] = useState("");
    const [isActive, setActive] = useState(false);

    const onChange: FormEventHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue(e.target.value);
    };

    return (
        <form
            className={style}
            onChange={onChange}
            onSubmit={event => {
                event.preventDefault();

                try {
                    emailSchema.parse(value);

                    console.log(value);
                    router.push("/success?email=" + value);
                } catch (error) {
                    setActive(true);
                }
            }}
            id="form"
        >
            <div>
                <span data-error-state={isActive ? "" : null}>
                    Valid email required
                </span>
                <label htmlFor="email">Email address</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email@company.com"
                    data-error-state={isActive ? "" : null}
                />
            </div>
            <BlueButton type="submit">
                Subscribe to monthly newsletter
            </BlueButton>
        </form>
    );
}
