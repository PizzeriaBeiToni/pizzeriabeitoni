import React from "react";
import {useMediaQuery} from "@mui/material";
import Navbar from "@/src/components/Navbar/Navbar";
import Sidebar from "@/src/components/Sidebar/Sidebar";


const Navigation: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width: 1150px)');

    return isSmallScreen? <Navbar /> : <Sidebar />;
}

export default Navigation;