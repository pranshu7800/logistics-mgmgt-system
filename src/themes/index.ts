import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Nunito, Arial, sans-serif',
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#ffd600',
        },
    },
    spacing: 6,
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiAppBar: {
            variants: [
                {
                    props: { color: 'default' },
                    style: {
                        backgroundColor: '#689f38',
                        color: '#fff',
                    },
                },
            ],
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#ffd600',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        fontWeight: 'bold',
                    },
                }
            },
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;