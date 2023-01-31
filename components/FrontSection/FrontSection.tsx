import styles from "./FrontSection.module.sass";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";


const Image: React.FC<{ src: string }> = ({ src }) => {
    return (
        <motion.img
            className={styles.image}
            key={src}
            src={`/img/${src}.jpg`}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        />
    );
}


function useImages() {
    const [col1, setCol1] = useState<JSX.Element[]>([]);
    const [col2, setCol2] = useState<JSX.Element[]>([]);

    useEffect(() => {
        let c1 = [];
        let c2 = []
        for (let i=1; i<=3; i++) {
            c1.push(<Image src={'c1_r' + i} />);
            c2.push(<Image src={'c2_r' + i} />);
        }
        c2.push(<Image src={'c2_r4'} />);
        setCol1(c1);
        setCol2(c2);
    }, []);

    return [col1, col2];
}


const FrontSection: React.FC = () => {
    const [col1, col2] = useImages();

    return (
        <div id="photos" className={styles.context}>

            <motion.div
                className={styles.column}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                { col1 }
            </motion.div>

            <motion.div
                className={styles.column}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                { col2 }
            </motion.div>

        </div>
    );
}

export default FrontSection;
