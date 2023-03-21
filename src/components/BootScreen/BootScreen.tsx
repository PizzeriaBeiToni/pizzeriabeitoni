import React from "react";
import {Context, Logo} from "./BootScreen.styles";
import {logoMotion, contextMotion} from "./BootScreen.motion";


interface BootScreenProps {
    onAnimationComplete?: () => void;
}


const BootScreen: React.FC<BootScreenProps> = ({ onAnimationComplete }) => {
    return (
        <Context {...contextMotion}>
            <Logo
                src="/img/logo_full.png"
                alt="logo"
                {...logoMotion}
                onAnimationComplete={onAnimationComplete}
            />
        </Context>
    );
}

export default BootScreen;
