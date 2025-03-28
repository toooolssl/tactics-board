const AppConfigs = {
    default: {
        useFirebase: true,
        siteHomeURL: null,
        siteLogoURL: null,
        pitchCenterADURL: null,
        thumbnailWidth: 320,    // height calculated from proportions
    },
    coatchingfutsal: {
        useFirebase: false,
        siteHomeURL: '/',
        siteLogoURL: '/img/logo-toools.png',       // Nueva ruta relativa a public/
        pitchCenterADURL: '/img/isquad-blanco-completo.png', // Nueva ruta relativa a public/
        signInURL: '/Account/LoginRegister',
        signOutURL: '/Account/LogOff',
        getUserURL: '/Account/GetUser',
        saveURL: '/TacticsBoard/SaveTactic',
        loadURL: '/TacticsBoard/TacticsLoad',
        loadSharedURL: '/TacticsBoard/TacticsLoadShared',
        listURL: '/TacticsBoard/GetTacticsList',
        deleteURL: '/TacticsBoard/DeleteTactic',
        thumbnailWidth: 1280,   // height calculated from proportions
    }
}

export default AppConfigs;
