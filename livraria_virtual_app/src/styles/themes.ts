import { color, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        light: {
            "100": '#FFFFFF',
            "300": "#EEEFF1"
        },
        gold: {
            "100": "#F5DFB6",
            "700": "#F1C65D"
        },
        blue: {
            "300": "#5360C8"
        },
        purple: {
            "700": "#473790"
        },
        yellow: {
            "500": "#F7E340"
        },
        dark: {
            "800": '#191919'
        }
    },
    fonts: {
        body: 'Playfair Display',
    },
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth'
            },
            body: {
                bg: 'light.300',
            },
            header: {
                color: 'light.100'
            },
            nav: {
                color: 'light.100'
            },
            ul: {
                color: 'light.100',
                listStyleType: 'none',
                textDecoration: 'none'
            },
            section: {
                width: '100%',
                maxWidth: '890px',
                padding: "64px 15px",
                color: 'black.800',
            },
            a: {
                _hover: {
                    textDecoration: 'none',
                    textDecorationColor: 'transparent'
                }
            },
        }
    }
})