"use client";
import { Card } from "@/components/general/Card/Card";
import { useSearchParams } from "next/navigation";

export default function Success() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    return (
        <>
            <Card title="Thanks for subscribing!" success={true}>
                A confirmation email has been sent to <strong>{email}</strong>.
                Please open it and click the button inside to confirm your
                subscription.
            </Card>
        </>
    );
}
