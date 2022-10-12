import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        light: {
            "100": '#FFFFFF',
        },
        gold: {
            "100": "#F5DFB6"
        },
        blue: {
            "300": "##5360C8"
        },
        purple: {
            "700": "#473790"
        },
        yellow: {
            "500": "##F7E340"
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
                bg: 'dark.800',
                color: 'light.100'
            },
            ul: {
                color: 'light.100',
                listStyleType: 'none',
                textDecoration: 'none'
            },
            section: {
                width: '100%',
                maxWidth: '1440px',
                padding: "64px 0"
            },
            a: {
                _hover: {
                    textDecoration: 'none',
                    textDecorationColor: 'transparent'
                }
            },
            h2: {
                marginBottom: '50px'
            }
        }
    }
})