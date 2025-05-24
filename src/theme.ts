// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'var(--font-family)',
        body: 'var(--font-family)',
    },
    styles: {
        global: {
            ':root': {
                '--font-family': '"Inter", sans-serif',
                '--second-family': '"Roboto", sans-serif',
            },
        },
    },
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'var(--font-family)',
            },
        },
    },
    breakpoints: {
        base: '0px',
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
    },
});

export default theme;
