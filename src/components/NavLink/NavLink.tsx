import React, {ReactNode} from "react";
import {Link} from "react-scroll";
import {Context} from "./NavLink.styles";


interface NavLinkProps {
    targetId: string;
    onClick?: () => void;
    children?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ targetId, onClick, children }) => {
    return (
        <Context>
            <Link
                containerId="content"
                onClick={onClick}
                duration={1000}
                to={targetId}
                smooth
                spy
            >
                { children }
            </Link>
        </Context>
    );
}

export default NavLink;