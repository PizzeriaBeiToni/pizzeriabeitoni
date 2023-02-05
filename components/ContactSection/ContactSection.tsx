import styles from "./ContactSection.module.sass";
import React from "react";
import {BsTelephoneFill as PhoneIcon} from "react-icons/bs";
import {FaMapMarkerAlt as MapIcon} from "react-icons/fa";


const ContactSection: React.FC = () => {
    return (
        <div id="contact" className={styles.context}>

            <div>

                <span className={styles.header}>
                    Kontakt
                </span>

                <p className={styles.paragraph}>
                    Setzen Sie sich gerne mit uns in Verbindung oder besuchen Sie unser
                    Restaurant.
                </p>

                <span className={styles.contactItem}>
                    <PhoneIcon /> 02973 451
                </span>

                <span className={styles.contactItem}>
                    <MapIcon /> Mathmeckestraße 4, 59889 Eslohe
                </span>

            </div>

        </div>
    );
}


export default ContactSection;
