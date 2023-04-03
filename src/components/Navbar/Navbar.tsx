import React, {useState} from "react";
import {Context, Logo, MenuButton, MenuContent} from "./Navbar.styles";
import {GiKnifeFork as MenuIcon} from "react-icons/gi";
import {NavAddressSection, NavLinksSection} from "@/src/components/Sidebar/Sidebar";


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Context>

            <Logo src="/img/logo.png" alt=""/>

            <MenuButton open={isMenuOpen} onClick={toggleMenu}>
                <MenuIcon />
            </MenuButton>

            <MenuContent open={isMenuOpen}>

                {/* Address */}
                <NavAddressSection />

                {/* Links */}
                <NavLinksSection onLinkClick={toggleMenu} />

            </MenuContent>

        </Context>
    );
}

export default Navbar;