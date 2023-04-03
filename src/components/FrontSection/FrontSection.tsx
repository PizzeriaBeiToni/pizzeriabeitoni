import React from "react";
import {Context, GridWrapper, Image} from "./FrontSection.styles";
import {Grid} from "@mui/material";


const FrontSection: React.FC = () => {
    return (
        <Context id="photos">

            <Grid container columnSpacing={1}>
                <Grid item xs={12} sm={6}>
                    <GridWrapper>

                        <Image
                            src="https://scontent-fra5-2.xx.fbcdn.net/v/t1.18169-9/1240610_1428172757407366_1184913606_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UGBWrHm9MCIAX8Dmi5E&_nc_oc=AQkzLb87AnFoHbn2D9D1R8d5VEn38vnSx1ryPs-Z5LaDELIdVZF1vo8yMHGFV08TKUtjeMcKIyOO0z9w51RudrAV&_nc_ht=scontent-fra5-2.xx&oh=00_AfA7qReQ7Z1iz6eMDWBAe9z_4bw1n8hTBVv4ko7Jn83nDA&oe=64412497"
                            alt=""
                        />
                        <Image
                            src="https://scontent-fra3-1.xx.fbcdn.net/v/t1.18169-9/1238208_1428173417407300_198022495_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1Cq_cAKjBRwAX-9jUFA&_nc_ht=scontent-fra3-1.xx&oh=00_AfBguCVl3C2PykimNTj5eFD6qjVbAZOG5XNYQRk9LZyq_g&oe=64413BED"
                            alt=""
                        />
                        <Image
                            src="https://scontent-fra3-1.xx.fbcdn.net/v/t1.18169-9/1175447_1428174757407166_1761229970_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kSCzNXXeTyMAX-EaI3m&_nc_ht=scontent-fra3-1.xx&oh=00_AfDhiCAdZITAZj43LCai8rpFKEanoTtdMBY1zcL58yHTWw&oe=64413415"
                            alt=""
                        />

                    </GridWrapper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GridWrapper>

                        <Image
                            src="https://scontent-frt3-2.xx.fbcdn.net/v/t1.18169-9/564394_1428173180740657_858118587_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=mZPnQQYnIcMAX9xcK8c&_nc_ht=scontent-frt3-2.xx&oh=00_AfCiVs3VVRi80RBdGe2kAJAwNo_jHiDXaesfMH8DmUxqJw&oe=64412DC9"
                            alt=""
                        />
                        <Image
                            src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.18169-9/995977_1407720686119240_928600386_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Y7zWyYmfWxUAX8mwtAq&_nc_ht=scontent-dus1-1.xx&oh=00_AfBPGPs4hEKyFZzohW7yZOxqdNYJUZzhXPKRTrPeqs6RyA&oe=64412BB2"
                            alt=""
                        />
                        <Image
                            src="https://scontent-fra5-2.xx.fbcdn.net/v/t1.18169-9/1236951_1428174540740521_63959947_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-l-NslWcFc8AX8Bg0gA&_nc_oc=AQlBIOh8Z_cY-S0zOtk2H_fsmhoJ9USQBaubfI7N2OL6UkqPqLSOb5q1X_9rfUn1vOabGbM1S7CZj_HppjqJhCQQ&_nc_ht=scontent-fra5-2.xx&oh=00_AfC9BupiEbiFVty8wY2II26jy8aA84OnsOmZqXDE4J0lpQ&oe=64413A5F"
                            alt=""
                        />
                        <Image
                            src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.18169-9/1239661_1428166607407981_1846327298_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=rcu6v8dUS_0AX-omIu0&_nc_ht=scontent-dus1-1.xx&oh=00_AfDexC1bflHlwUhdyYJ7FJbmk7eGirHqGU30vsmNMA_GQQ&oe=64412843"
                            alt=""
                        />

                    </GridWrapper>
                </Grid>
            </Grid>

        </Context>
    );
}

export default FrontSection;
