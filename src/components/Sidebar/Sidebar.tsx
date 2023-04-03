import React from "react";
import {FaFacebookSquare as FacebookIcon} from "react-icons/fa";
import {
    AddressLink,
    AddressSection,
    Context,
    LinksSection,
    Logo
} from "./Sidebar.styles";
import {IconButton} from "@mui/material";
import NavLink from "@/src/components/NavLink/NavLink";


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
        <NavLink href="/" onClick={onLinkClick}>
            Homepage
        </NavLink>
        <NavLink href="/menu" onClick={onLinkClick}>
            Menü
        </NavLink>
        <NavLink href="/zeiten" onClick={onLinkClick}>
            Zeiten & Standort
        </NavLink>
        <NavLink href="/impressum" onClick={onLinkClick}>
            Impressum
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
    return (
        <Context>

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
