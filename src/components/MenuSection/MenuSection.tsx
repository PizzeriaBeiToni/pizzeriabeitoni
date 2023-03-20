import React from "react";
import { HiOutlineBookOpen as OpenIcon } from "react-icons/hi";
import {About, Context, Section} from "./MenuSection.styles";
import {contextMotion} from "./MenuSection.motion";
import {SectionHeader, SectionParagraph} from "@/src/styles/section.styles";
import {ButtonLink} from "@/src/styles/presets.styles";


const MenuSection: React.FC = () => {
    return (
        <Context id="menu" {...contextMotion}>

            <About>
                Wir sind ein klassisches, Italienisches Restaurant
                im Herzen Wenholthausens
            </About>

            <Section>
                <div>

                    <SectionHeader>
                        Menü
                    </SectionHeader>

                    <SectionParagraph>
                        Unsere leckeren Gerichte repräsentieren die mediterranische,
                        Italienische Kultur.
                    </SectionParagraph>

                    <ButtonLink href="/src/public/menu.pdf" target="_blank" rel="noreferrer">
                        Öffnen <OpenIcon />
                    </ButtonLink>

                </div>
                <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=2000" alt="" />
            </Section>

        </Context>
    );
}

export default MenuSection;
