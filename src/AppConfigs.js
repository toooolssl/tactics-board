// AppConfigs.js
const AppConfigs = {
    default: {
      useFirebase: false,
      siteHomeURL: null,
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
      pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      thumbnailWidth: 320, // height calculated from proportions
    },
    balonmano: {
      useFirebase: false,
      siteHomeURL: '/',
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
      pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      signInURL: '/Account/LoginRegister',
      signOutURL: '/Account/LogOff',
      getUserURL: '/Account/GetUser',
      saveURL: '/TacticsBoard/SaveTactic',
      loadURL: '/TacticsBoard/TacticsLoad',
      loadSharedURL: '/TacticsBoard/TacticsLoadShared',
      listURL: '/TacticsBoard/GetTacticsList',
      deleteURL: '/TacticsBoard/DeleteTactic',
      thumbnailWidth: 1280,
      ballHref: process.env.PUBLIC_URL + '/elements/handball_ball.svg', // SVG específico para balonmano
    },
    rugby: {
      useFirebase: false,
      siteHomeURL: '/',
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
      pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      signInURL: '/Account/LoginRegister',
      signOutURL: '/Account/LogOff',
      getUserURL: '/Account/GetUser',
      saveURL: '/TacticsBoard/SaveTactic',
      loadURL: '/TacticsBoard/TacticsLoad',
      loadSharedURL: '/TacticsBoard/TacticsLoadShared',
      listURL: '/TacticsBoard/GetTacticsList',
      deleteURL: '/TacticsBoard/DeleteTactic',
      thumbnailWidth: 1280,
      ballHref: process.env.PUBLIC_URL + '/elements/rugby_ball.svg', // SVG específico para rugby
    },
    hockey: {
      useFirebase: false,
      siteHomeURL: '/',
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
      pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      signInURL: '/Account/LoginRegister',
      signOutURL: '/Account/LogOff',
      getUserURL: '/Account/GetUser',
      saveURL: '/TacticsBoard/SaveTactic',
      loadURL: '/TacticsBoard/TacticsLoad',
      loadSharedURL: '/TacticsBoard/TacticsLoadShared',
      listURL: '/TacticsBoard/GetTacticsList',
      deleteURL: '/TacticsBoard/DeleteTactic',
      thumbnailWidth: 1280,
      ballHref: process.env.PUBLIC_URL + '/elements/hockey_disk.svg', // SVG específico para hockey
    },
  };
  
  export default AppConfigs;
  