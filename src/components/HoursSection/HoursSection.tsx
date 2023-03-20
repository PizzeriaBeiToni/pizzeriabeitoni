import React from "react";
import {Box, Context, Header, HourItemContext, HourItemDay, HourItemHours} from "./HoursSection.styles";


interface HourItemProps {
    day: string;
    hours: string[]
}

const HourItem: React.FC<HourItemProps> = ({ day, hours }) => {
    return (
        <HourItemContext>
            <HourItemDay>
                { day }
            </HourItemDay>
            <HourItemHours>
                { hours.map(hour => <span key={day + hour}>{ hour }</span>) }
            </HourItemHours>
        </HourItemContext>
    );
}


const HoursSection: React.FC = () => {
    return (
        <Context id="hours">

                <Header>
                    Unsere Öffnungszeiten
                </Header>

                <Box>
                    <HourItem
                        day="Montag"
                        hours={[
                            "12:00 - 14:30",
                            "17:00 - 22:00"
                        ]}
                    />
                    <HourItem
                        day="Dienstag"
                        hours={[
                            "12:00 - 14:30",
                            "17:00 - 22:00"
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
                            "12:00 - 14:30",
                            "17:00 - 22:00"
                        ]}
                    />
                    <HourItem
                        day="Freitag"
                        hours={[
                            "12:00 - 14:30",
                            "17:00 - 22:00"
                        ]}
                    />
                    <HourItem
                        day="Samstag"
                        hours={[
                            "12:00 - 14:30",
                            "17:00 - 22:00"
                        ]}
                    />
                    <HourItem
                        day="Sonntag"
                        hours={[
                            "12:00 - 14:30",
                            "17:00 - 22:00"
                        ]}
                    />
            </Box>

        </Context>
    );
}


export default HoursSection;
