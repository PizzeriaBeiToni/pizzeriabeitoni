import {MotionProps, Variants} from "framer-motion";


export const imageVariants: Variants = {
    before: {
        opacity: 0,
    },
    after: {
        opacity: 1
    }
}

const fadeDuration = 0.3;
const delay = 0.75;

export const leftGridMotion: MotionProps = {
    initial: "before",
    animate: "after",
    transition: {
        duration: fadeDuration,
        staggerChildren: fadeDuration * 2,
        delayChildren: delay
    }
}

export const rightGridMotion: MotionProps = {
    initial: "before",
    animate: "after",
    transition: {
        duration: fadeDuration,
        staggerChildren: fadeDuration * 2,
        delayChildren: delay + fadeDuration
    }
}