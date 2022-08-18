export const DefaultTheme = {
    id  : "default_theme",
    name: "TC Anwendungen",

    bodyFontSize: '24px',
    spaceStep   : 0.25,
    fontFamily  : 'Roboto, sans-serif',
    fontColor   : {
        primaryColor: '#E20000',
        secondary   : '#71BF42',
        text        : '#000000',

        button: {
            primaryColor  : '#fff',
            secondaryColor: '#000000',
        }
    },
    color: {
        boxShadow            : 'rgb(0 0 0 / 50%)',
        borderPrimary        : 'rgb(51, 51, 51)',
        backgroundPrimary    : '#e20000',
        highlightPrimaryColor: '#fae2e2',
        backgroundSecondary  : '#fff'
    },
    lineHeight: {
        larger : `${2 * 1.125}rem`,
        large  : `${1.25 * 1.125}rem`,
        medium : `${0.9 * 1.125}rem`,
        small  : `${0.7 * 1.125}rem`,
        smaller: `${0.5 * 1.125}rem`
    },
    fontSize: {
        larger : '1.5rem',
        large  : '1rem',
        medium : '0.7rem',
        small  : '0.5rem',
        smaller: '0.35rem'
    }
};