import React from "react";
import {Context, GridWrapper, Image} from "./FrontSection.styles";
import {Grid} from "@mui/material";
import {leftGridMotion, imageVariants, rightGridMotion} from "@/src/components/FrontSection/FrontSection.motion";


const FrontSection: React.FC = () => {
    return (
        <Context id="photos">

            <Grid container columnSpacing={1}>
                <Grid item xs={12} sm={6}>
                    <GridWrapper {...leftGridMotion}>

                        <Image src="/img/c1_r1.jpg" alt="" variants={imageVariants} />
                        <Image src="/img/c1_r2.jpg" alt="" variants={imageVariants} />
                        <Image src="/img/c1_r3.jpg" alt="" variants={imageVariants} />

                    </GridWrapper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GridWrapper {...rightGridMotion}>

                        <Image src="/img/c2_r1.jpg" alt="" variants={imageVariants} />
                        <Image src="/img/c2_r2.jpg" alt="" variants={imageVariants} />
                        <Image src="/img/c2_r3.jpg" alt="" variants={imageVariants} />
                        <Image src="/img/c2_r4.jpg" alt="" variants={imageVariants} />

                    </GridWrapper>
                </Grid>
            </Grid>

        </Context>
    );
}

export default FrontSection;
