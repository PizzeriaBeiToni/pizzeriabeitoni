import React, {useEffect, useState} from "react";
import {Column, Context, Image} from "./FrontSection.styles";
import {columnMotion, imageMotion} from "./FrontSection.motion";


function useImages(): [JSX.Element[], JSX.Element[]] {
    const [col1, setCol1] = useState<JSX.Element[]>([]);
    const [col2, setCol2] = useState<JSX.Element[]>([]);

    // load all images.
    // NOTE: This is bad practice
    // TODO Make this maintainable
    useEffect(() => {
        let c1 = [];
        let c2 = []
        for (let i=1; i<=3; i++) {
            c1.push(
                <Image
                    key={'c1_r' + i}
                    src={`/img/c1_r${i}.jpg`}
                    alt="" {...imageMotion}
                />
            );
            c2.push(
                <Image
                    key={'c2_r' + i}
                    src={`/img/c2_r${i}.jpg`}
                    alt="" {...imageMotion}
                />
            );
        }
        c2.push(<Image src={'/img/c2_r4.jpg'} />);
        setCol1(c1);
        setCol2(c2);
    }, []);

    return [col1, col2];
}


const FrontSection: React.FC = () => {
    const [col1, col2] = useImages();

    return (
        <Context id="photos">

            <Column {...columnMotion}>
                { col1 }
            </Column>

            <Column {...columnMotion}>
                { col2 }
            </Column>

        </Context>
    );
}

export default FrontSection;
