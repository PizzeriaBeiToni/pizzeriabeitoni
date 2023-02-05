import styles from "./HoursSection.module.sass";
import React from "react";


interface HourItemProps {
    day: string;
    hours: string[]
}

const HourItem: React.FC<HourItemProps> = ({ day, hours }) => {
    return (
        <div className={styles.hourItem}>

            <div className={styles.hourItemDay}>
                { day }
            </div>

            <div className={styles.hourItemHours}>
                { hours.map(hour => <span key={day + hour}>{ hour }</span>) }
            </div>

        </div>
    );
}


const HoursSection: React.FC = () => {
    return (
        <div id="hours" className={styles.context}>


                <span className={styles.header}>
                    Unsere Öffnungszeiten
                </span>

                <div className={styles.box}>

                    <HourItem
                        day="Montag"
                        hours={[
                            "12:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

                    <HourItem
                        day="Dienstag"
                        hours={[
                            "12:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

                    <HourItem
                        day="Mittwoch"
                        hours={[
                            "RUHETAG",
                            "-"
                        ]}
                    />

                    <HourItem
                        day="Donnerstag"
                        hours={[
                            "11:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

                    <HourItem
                        day="Freitag"
                        hours={[
                            "12:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

                    <HourItem
                        day="Samstag"
                        hours={[
                            "12:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

                    <HourItem
                        day="Sonntag"
                        hours={[
                            "12:00 - 15:00",
                            "15:00 - 00:00"
                        ]}
                    />

            </div>

        </div>
    );
}


export default HoursSection;
