import React from "react";
import {FaMapMarkerAlt as MapIcon} from "react-icons/fa";
import {Context, EmbeddedMap, Section} from "./MapsSection.styles";
import {SectionHeader, SectionParagraph} from "@/src/styles/section.styles";
import {ButtonLink} from "@/src/styles/presets.styles";


const MapsSection: React.FC = () => {
    return (
        <Context id="maps">

            <EmbeddedMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.228257977879!2d8.175007599999997!3d51.288523399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbe4723bb74883%3A0x4b508d5652ddf19c!2sRestaurant-Pizzeria%20bei%20Toni!5e0!3m2!1sen!2sus!4v1675549683015!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            <Section>
                <div>

                    <SectionHeader>
                        Besuchen Sie Uns
                    </SectionHeader>

                    <SectionParagraph>
                        Genießen Sie Italienische Spezialitäten, die in unserer Küche
                        angeboten werden.
                    </SectionParagraph>

                    <ButtonLink target="_blank" href="https://goo.gl/maps/WtdewpnyvgqJamHG6" rel="noreferrer">
                        Maps <MapIcon />
                    </ButtonLink>

                </div>
            </Section>

        </Context>
    );
}


export default MapsSection;
