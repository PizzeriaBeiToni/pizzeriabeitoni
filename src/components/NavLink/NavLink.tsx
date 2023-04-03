import React, {ReactNode} from "react";
import {Context} from "./NavLink.styles";
import Link from "next/link";


interface NavLinkProps {
    href: string;
    onClick?: () => void;
    children?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children }) => {
    return (
        <Link href={href} onClick={onClick}>
            <Context>
                { children }
            </Context>
        </Link>
    );
}

export default NavLink;