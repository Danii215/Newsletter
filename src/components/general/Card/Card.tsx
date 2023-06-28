"use client";
import Image from "next/image";
import cardDesktop from "@/assets/img/illustration-sign-up-desktop.svg";
import cardMobile from "@/assets/img/illustration-sign-up-mobile.svg";
import Form from "../Form/Form";
import DesignText from "../DesignText/DesignText";
import CardList from "../List/List";
import style from "./Card.module.scss";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import BlueButton from "../BlueButton/BlueButton";

export function Card({
    title,
    children,
    success,
}: {
    title: string;
    children: ReactNode;
    success: boolean;
}) {
    const router = useRouter();

    return (
        <section className={style.card} data-success={success}>
            <article className={style.card__article}>
                <div>
                    <DesignText title={title}>{children}</DesignText>
                    {!success && <CardList style={style.card__list} />}
                    {!success && <Form style={style.card__form} />}
                </div>
            </article>
            {!success && (
                <picture>
                    <source media="(max-width:800px)" srcSet={cardMobile.src} />
                    <Image
                        src={cardDesktop.src}
                        height={cardDesktop.height}
                        width={cardDesktop.width}
                        alt="Flowers"
                        className={style.card__image}
                        loading={"eager"}
                    />
                </picture>
            )}
            {success && (
                <BlueButton onClick={() => router.push("/")} type="submit">
                    Dismiss message
                </BlueButton>
            )}
        </section>
    );
}
