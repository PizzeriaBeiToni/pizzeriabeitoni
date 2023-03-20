import React, {useState} from "react";
import {GiKnifeFork as MenuIcon} from "react-icons/gi";
import {FaFacebookSquare as FacebookIcon} from "react-icons/fa";
import {Link} from "react-scroll";
import {
    AddressLink,
    AddressSection,
    Context,
    ContextSmall,
    FacebookLink,
    LinksSection,
    Logo,
    LogoSmall, MenuButton, MenuContent
} from "./Sidebar.styles";
import {useMediaQuery} from "@mui/material";


const ScrollLink: React.FC<{ title: string, to: string, onClick?: () => void }> = ({ title, to, onClick }) => (
    <Link containerId="content" to={to} smooth spy duration={1500} onClick={onClick}>
        { title }
    </Link>
);


const Sidebar: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width: 1150px)');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isSmallScreen) {
        return (
            <ContextSmall>

                {/* Header (Title) */}
                <LogoSmall src="/img/logo_full.png" alt=""/>

                <MenuButton
                    initial={undefined}
                    animate={{ rotate: isMenuOpen? -180 : 0 }}
                    onClick={toggleMenuOpen}
                >
                    <MenuIcon />
                </MenuButton>

                <MenuContent
                    initial={undefined}
                    animate={{ translateY: !isMenuOpen? '-100vh' : 0, opacity: !isMenuOpen? 0 : 1 }}
                    transition={{ type: 'ease', duration: 0.5 }}
                >
                    {/* Address */}
                    <AddressSection>
                        <AddressLink target="_blank" rel="noreferrer" href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
                            Mathmeckestraße 4 <br />
                            59889 Eslohe
                        </AddressLink>
                    </AddressSection>

                    {/* Links */}
                    <LinksSection>
                        <ScrollLink title="Fotos" to="photos" onClick={toggleMenuOpen} />
                        <ScrollLink title="Menü" to="menu" onClick={toggleMenuOpen} />
                        <ScrollLink title="Standort" to="maps" onClick={toggleMenuOpen} />
                        <ScrollLink title="Öffnungszeiten" to="hours" onClick={toggleMenuOpen} />
                        <ScrollLink title="Kontakt" to="contact" onClick={toggleMenuOpen} />
                        <FacebookLink
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/people/Restaurant-Pizzeria-Bei-Toni/100062113045315/"
                        >
                            <FacebookIcon />
                        </FacebookLink>
                    </LinksSection>

                </MenuContent>

            </ContextSmall>
        );
    }

    return (
        <Context
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ type: 'ease', duration: 0.7 }}
        >

            {/* Header (Title) */}
            <Logo src="/img/logo_full.png" alt="" />

            {/* Address */}
            <AddressSection>
                <AddressLink target="_blank" rel="noreferrer" href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
                    Mathmeckestraße 4 <br />
                    59889 Eslohe
                </AddressLink>
            </AddressSection>

            {/* Links */}
            <LinksSection>
                <ScrollLink title="Fotos" to="photos" onClick={toggleMenuOpen} />
                <ScrollLink title="Menü" to="menu" onClick={toggleMenuOpen} />
                <ScrollLink title="Standort" to="maps" onClick={toggleMenuOpen} />
                <ScrollLink title="Öffnungszeiten" to="hours" onClick={toggleMenuOpen} />
                <ScrollLink title="Kontakt" to="contact" onClick={toggleMenuOpen} />
                <FacebookLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/people/Restaurant-Pizzeria-Bei-Toni/100062113045315/"
                >
                    <FacebookIcon />
                </FacebookLink>
            </LinksSection>

        </Context>
    );
}


export default Sidebar;
