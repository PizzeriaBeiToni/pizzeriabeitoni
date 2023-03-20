import React from "react";
import {BsTelephoneFill as PhoneIcon} from "react-icons/bs";
import {FaMapMarkerAlt as MapIcon} from "react-icons/fa";
import {ContactItem, Context, Header, Paragraph} from "./ContactSection.styles";


const ContactSection: React.FC = () => {
    return (
        <Context id="contact">
            <div>

                <Header>
                    Kontakt
                </Header>

                <Paragraph>
                    Setzen Sie sich gerne mit uns in Verbindung oder besuchen Sie unser
                    Restaurant.
                </Paragraph>

                <ContactItem>
                    <PhoneIcon /> 02973 451
                </ContactItem>

                <ContactItem>
                    <MapIcon /> Mathmeckestraße 4, 59889 Eslohe
                </ContactItem>

            </div>
        </Context>
    );
}


export default ContactSection;
