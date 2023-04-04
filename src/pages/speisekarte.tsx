import {NextPage} from "next";
import {Context, MenuDescription, MenuHeader, MenuImage, MenuLink} from "@/src/styles/menu.styles";
import {HiOutlineBookOpen as OpenIcon} from "react-icons/hi";
import React from "react";
import Head from "next/head";


const Speisekarte: NextPage = () => {
    return (
        <Context>

            <Head>
                <title>Pizzeria Bei Toni | Speisekarte</title>
            </Head>

            <MenuImage src="/img/menu/pizza.webp" alt="Pizza" />

            <MenuHeader>
                Die Speisekarte
            </MenuHeader>

            <MenuDescription>
                Wir sind ein klassisches, Italienisches Restaurant im Herzen Wenholthausens.
                Unsere leckeren Gerichte repräsentieren die mediterranische, Italienische Kultur: Einfach,
                raffiniert und geschmacksvoll.
            </MenuDescription>

            <MenuLink href="/docs/speisekarte.pdf" target="_blank" rel="noreferrer">
                Öffnen <OpenIcon />
            </MenuLink>

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Speisekarte;