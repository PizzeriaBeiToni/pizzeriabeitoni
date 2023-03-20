import {MotionProps} from "framer-motion";


export const imageMotion: MotionProps = {
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

export const columnMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 0.5,
        delay: 0.8
    }
}