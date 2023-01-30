import {useMediaQuery} from "@mui/material";


export const dimensions = {
    large: 1200,
    medium: 992,
    small: 768
}


export function useMaxWidth(dim: 'small' | 'medium' | 'large' | number) {
    const size = (typeof dim === 'string')? dimensions[dim] : dim;
    return useMediaQuery(`(max-width: ${size}px)`)
}
