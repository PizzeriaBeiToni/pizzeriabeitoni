import React from "react";
import {FaFacebookSquare as FacebookIcon} from "react-icons/fa";
import {
    AddressLink,
    AddressSection,
    Context,
    LinksSection,
    Logo
} from "./Sidebar.styles";
import {contextMotion} from "./Sidebar.motion";
import {IconButton, useMediaQuery} from "@mui/material";
import NavLink from "@/src/components/NavLink/NavLink";
import Navbar from "@/src/components/Navbar/Navbar";


const Facebook: React.FC = () => (
    <div>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/people/Restaurant-Pizzeria-Bei-Toni/100062113045315/"
        >
            <IconButton color="primary" sx={{ marginTop: '30px' }}>
                <FacebookIcon />
            </IconButton>
        </a>
    </div>
);


export const NavLinksSection: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
    <LinksSection>
        <NavLink targetId="photos" onClick={onLinkClick}>
            Fotos
        </NavLink>
        <NavLink targetId="menu" onClick={onLinkClick}>
            Menü
        </NavLink>
        <NavLink targetId="maps" onClick={onLinkClick}>
            Maps
        </NavLink>
        <NavLink targetId="hours" onClick={onLinkClick}>
            Hours
        </NavLink>
        <NavLink targetId="contact" onClick={onLinkClick}>
            Kontakt
        </NavLink>
        <Facebook />
    </LinksSection>
);


export const NavAddressSection: React.FC = () => (
    <AddressSection>
        <AddressLink target="_blank" rel="noreferrer" href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
            Mathmeckestraße 4 <br />
            59889 Eslohe
        </AddressLink>
    </AddressSection>
);


const Sidebar: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width: 1150px)');

    if (isSmallScreen) {
        return <Navbar />;
    }

    return (
        <Context {...contextMotion}>

            {/* Logo */}
            <Logo src="/img/logo.png" alt="" />

            {/* Address */}
            <NavAddressSection />

            {/* Links */}
            <NavLinksSection />

        </Context>
    );
}


export default Sidebar;
