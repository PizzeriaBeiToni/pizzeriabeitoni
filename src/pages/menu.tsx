import {NextPage} from "next";
import {Context, MenuDescription, MenuHeader, MenuImage, MenuLink} from "@/src/styles/menu.styles";
import {HiOutlineBookOpen as OpenIcon} from "react-icons/hi";
import React from "react";


const Menu: NextPage = () => {
    return (
        <Context>

            <MenuImage
                src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=2000" alt=""
            />

            <MenuHeader>
                Das Menü
            </MenuHeader>

            <MenuDescription>
                Wir sind ein klassisches, Italienisches Restaurant im Herzen Wenholthausens.
                Unsere leckeren Gerichte repräsentieren die mediterranische, Italienische Kultur: Einfach,
                rafiniert und geschmacksvoll.
            </MenuDescription>

            <MenuLink href="/menu.pdf" target="_blank" rel="noreferrer">
                Öffnen <OpenIcon />
            </MenuLink>

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Menu;