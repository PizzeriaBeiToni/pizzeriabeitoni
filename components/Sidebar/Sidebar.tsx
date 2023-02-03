import styles from "./Sidebar.module.sass";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {useMaxWidth} from "@/dimensions";
import {GiKnifeFork as MenuIcon} from "react-icons/gi";


const Sidebar: React.FC = () => {
    // 1150px extracted from stylesheet: $max-folding-width
    const isSmallScreen = useMaxWidth(1150);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    if (isSmallScreen) {
        return (
            <motion.div className={styles.context}>

                {/* Header (Title) */}
                <div className={styles.header}>
                    <img src="/img/logo_full.png" alt="" />
                </div>

                <motion.div
                    className={styles.menuButton}
                    initial={undefined}
                    animate={{ rotate: isMenuOpen? -180 : 0 }}
                    onClick={toggleMenuOpen}
                >
                    <MenuIcon />
                </motion.div>

                <motion.div
                    className={styles.menuContent}
                    initial={undefined}
                    animate={{ translateY: !isMenuOpen? '-100vh' : 0, opacity: !isMenuOpen? 0 : 1 }}
                    transition={{ type: 'ease', duration: 0.5 }}
                >
                    {/* Address */}
                    <div className={styles.address}>
                        <a href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
                            Mathmeckestraße 4 <br />
                            59889 Eslohe
                        </a>
                    </div>

                    {/* Links */}
                    <div className={styles.links}>
                        <a>
                            Fotos
                        </a>
                        <a>
                            Menü
                        </a>
                        <a>
                            Kontakt
                        </a>
                    </div>
                </motion.div>

            </motion.div>
        );
    }

    return (
        <motion.div
            className={styles.context}
            initial={{ translateX: -300, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ type: 'ease', duration: 0.7 }}
        >

            {/* Header (Title) */}
            <div className={styles.header}>
                <img src="/img/logo_full.png" alt="" />
            </div>

            {/* Address */}
            <div className={styles.address}>
                <a href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
                    Mathmeckestraße 4 <br />
                    59889 Eslohe
                </a>
            </div>

            {/* Links */}
            <div className={styles.links}>
                <a>
                    Fotos
                </a>
                <a>
                    Menü
                </a>
                <a>
                    Kontakt
                </a>
            </div>

        </motion.div>
    );
}


export default Sidebar;
