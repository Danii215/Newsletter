import BlueButton from "@/components/general/BlueButton/BlueButton";
import { Card } from "@/components/general/Card/Card";

export default function Success() {
    return (
        <>
            <Card title="Thanks for subscribing!" success={true}>
                A confirmation email has been sent to{" "}
                <strong>ash@loremcompany.com</strong>. Please open it and click
                the button inside to confirm your subscription.
            </Card>
        </>
    );
}
