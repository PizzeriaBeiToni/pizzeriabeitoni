import React from "react";
import {Context, Image} from "./FrontSection.styles";
import {Grid} from "@mui/material";


const FrontSection: React.FC = () => {
    return (
        <Context id="photos">

            <Grid container columnSpacing={1}>
                <Grid item xs={12} sm={6}>

                    <Image src="/img/c1_r1.jpg" alt="" />
                    <Image src="/img/c1_r2.jpg" alt="" />
                    <Image src="/img/c1_r3.jpg" alt="" />

                </Grid>
                <Grid item xs={12} sm={6}>

                    <Image src="/img/c2_r1.jpg" alt="" />
                    <Image src="/img/c2_r2.jpg" alt="" />
                    <Image src="/img/c2_r3.jpg" alt="" />
                    <Image src="/img/c2_r4.jpg" alt="" />

                </Grid>
            </Grid>

        </Context>
    );
}

export default FrontSection;
