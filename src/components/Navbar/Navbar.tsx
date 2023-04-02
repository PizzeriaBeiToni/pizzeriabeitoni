import React, {useState} from "react";
import {Context, Logo, MenuButton, MenuContent} from "./Navbar.styles";
import {GiKnifeFork as MenuIcon} from "react-icons/gi";
import {NavAddressSection, NavLinksSection} from "@/src/components/Sidebar/Sidebar";
import {contextMotion, menuButtonMotion, menuContentMotion} from "./Navbar.motion";


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Context {...contextMotion}>

            <Logo src="/img/logo.png" alt=""/>

            <MenuButton onClick={toggleMenu} {...menuButtonMotion(isMenuOpen)}>
                <MenuIcon />
            </MenuButton>

            <MenuContent {...menuContentMotion(isMenuOpen)}>

                {/* Address */}
                <NavAddressSection />

                {/* Links */}
                <NavLinksSection onLinkClick={toggleMenu} />

            </MenuContent>

        </Context>
    );
}

export default Navbar;