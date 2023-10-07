import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const colors = {
    whiteSmoke: "#f5f3f5ff",
    slateGray: "#6f7d8cff",
    pigmentGreen: "#52aa5eff",
    carmine: "#9a031eff",
    pigmentGreen60: "#52aa5e99",
    carmine40: "#9a031e66",
    spaceCadet: "#171738ff",
}

export const theme = extendTheme({
    fonts: {
        body: 'var(--font-asul)',
        heading: 'var(--font-concertOne)',
    },
    colors,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                background: mode(colors.whiteSmoke, colors.whiteSmoke)(props),
            }
        })
    }
});