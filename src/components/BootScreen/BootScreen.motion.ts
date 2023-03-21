import {MotionProps} from "framer-motion";


export const contextMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 0.5
    }
}

export const logoMotion: MotionProps = {
    animate: {
        opacity: 0
    },
    transition: {
        delay: 2,
        duration: 0.6
    }
};