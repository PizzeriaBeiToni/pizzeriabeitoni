import styles from "./MenuSection.module.sass";
import React from "react";
import { HiOutlineBookOpen as OpenIcon } from "react-icons/hi";
import { motion } from "framer-motion";


const MenuSection: React.FC = () => {
    return (
        <motion.div
            id="menu"
            className={styles.context}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >

            <span className={styles.about}>
                Wir sind ein klassisches, Italienisches Restaurant
                im Herzen Wenholthausens
            </span>

            <div className={styles.section}>

                <div>
                    <span className={styles.sectionHeader}>
                        Menü
                    </span>
                    <p className={styles.sectionText}>
                        Unsere leckeren Gerichte repräsentieren die mediterranische,
                        Italienische Kultur.
                    </p>
                    <a className={styles.buttonLink} href="/menu.pdf" target="_blank" rel="noreferrer">
                        Öffnen <OpenIcon />
                    </a>
                </div>

                <img src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=2000" alt="" />

            </div>

        </motion.div>
    );
}

export default MenuSection;
