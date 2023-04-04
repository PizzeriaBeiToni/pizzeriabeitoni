import React from "react";
import {Context, GridWrapper, Image} from "./FrontSection.styles";
import {Grid} from "@mui/material";


const FrontSection: React.FC = () => {
    return (
        <Context>

            <img src="/img/index/schild.webp" style={{ width: '100%', pointerEvents: 'none', userSelect: 'none' }} alt="Pizzeria Bei Toni" />

            <Grid container columnSpacing={1}>
                <Grid item xs={12} sm={6}>
                    <GridWrapper>
                        <Image src="/img/index/grid-1-1.webp" alt=""/>
                        <Image src="/img/index/grid-1-2.webp" alt=""/>
                        <Image src="/img/index/grid-1-3.webp" alt=""/>
                    </GridWrapper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GridWrapper>
                        <Image src="/img/index/grid-2-1.webp" alt=""/>
                        <Image src="/img/index/grid-2-2.webp" alt=""/>
                        <Image src="/img/index/grid-2-3.webp" alt=""/>
                        <Image src="/img/index/grid-2-4.webp" alt=""/>
                    </GridWrapper>
                </Grid>
            </Grid>

        </Context>
    );
}

export default FrontSection;
