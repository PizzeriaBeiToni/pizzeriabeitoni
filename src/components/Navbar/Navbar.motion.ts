import {MotionProps} from "framer-motion";


export const contextMotion: MotionProps = {
    initial: {
        translateY: -75,
        opacity: 0
    },
    animate: {
        translateY: 0,
        opacity: 1
    },
    transition: {
        type: 'ease',
        duration: 0.7
    }
}

export function menuButtonMotion(open: boolean): MotionProps {
    return {
        animate: {
            rotate: open? -180 : 0
        }
    };
}

export function menuContentMotion(open: boolean): MotionProps {
    return {
        animate: {
            translateY: open? '0vh' : '-100vh',
            opacity: open? 1 : 0
        },
        transition: {
            type: 'ease',
            duration: 0.5
        }
    };
}