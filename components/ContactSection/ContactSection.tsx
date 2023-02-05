import styles from "./ContactSection.module.sass";
import React from "react";


const ContactSection: React.FC = () => {
    return (
        <div id="contact" className={styles.context}>

            <div>

                <span className={styles.header}>
                    Kontakt
                </span>

                <p className={styles.paragraph}>
                    Setzen Sie sich gerne mit uns in Verbindung.
                </p>

                <span className={styles.contactItem}>
                    Telefon: 02973 451
                </span>

            </div>

        </div>
    );
}


export default ContactSection;
