const AppConfigs = {
    default: {
        useFirebase: false,
        siteHomeURL: null,
        siteLogoURL: null,
        pitchCenterADURL: null,
        thumbnailWidth: 320,    // height calculated from proportions
    },
    coatchingfutsal: {
        useFirebase: false,
        siteHomeURL: '/',
        siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',       // Nueva ruta relativa a public/
        pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png', // Nueva ruta relativa a public/
        signInURL: '/Account/LoginRegister',
        signOutURL: '/Account/LogOff',
        getUserURL: '/Account/GetUser',
        saveURL: '/TacticsBoard/SaveTactic',
        loadURL: '/TacticsBoard/TacticsLoad',
        loadSharedURL: '/TacticsBoard/TacticsLoadShared',
        listURL: '/TacticsBoard/GetTacticsList',
        deleteURL: '/TacticsBoard/DeleteTactic',
        thumbnailWidth: 1280,   // height calculated from proportions
        ballHref: process.env.PUBLIC_URL + '/elements/ball.svg',
    },
    balonmano: {
        useFirebase: false,
        siteHomeURL: '/',
        siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',       // Nueva ruta relativa a public/
        pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png', // Nueva ruta relativa a public/
        signInURL: '/Account/LoginRegister',
        signOutURL: '/Account/LogOff',
        getUserURL: '/Account/GetUser',
        saveURL: '/TacticsBoard/SaveTactic',
        loadURL: '/TacticsBoard/TacticsLoad',
        loadSharedURL: '/TacticsBoard/TacticsLoadShared',
        listURL: '/TacticsBoard/GetTacticsList',
        deleteURL: '/TacticsBoard/DeleteTactic',
        thumbnailWidth: 1280,   // height calculated from proportions
        ballHref: process.env.PUBLIC_URL + '/elements/ball-handball.svg',
    }
}

export default AppConfigs;
