import { ReactNode } from "react";

export default function DesignText({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{children}</p>
        </>
    );
}
