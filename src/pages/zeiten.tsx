import {NextPage} from "next";
import {LandingImage} from "@/src/styles/presets.styles";
import HoursTable from "@/src/components/HoursTable/HoursTable";
import {Context, EmbeddedMap} from "@/src/styles/zeiten.styles";
import Head from "next/head";


const Zeiten: NextPage = () => {
    return (
        <Context>

            <Head>
                <title>Pizzeria Bei Toni | Zeiten</title>
            </Head>

            <LandingImage
                src="https://scontent-fra3-1.xx.fbcdn.net/v/t31.18172-8/1115940_1405112989713343_1405720748_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2jIBg9Jynv4AX_Rvc1m&_nc_ht=scontent-fra3-1.xx&oh=00_AfCTUUGGttgk6rWFa6eoMVhzJs9LFdYOAHnA-3uFK5QRow&oe=64527400"
            />

            <HoursTable />

            <EmbeddedMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.228257977879!2d8.175007599999997!3d51.288523399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbe4723bb74883%3A0x4b508d5652ddf19c!2sRestaurant-Pizzeria%20bei%20Toni!5e0!3m2!1sen!2sus!4v1675549683015!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Zeiten;