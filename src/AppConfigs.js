// AppConfigs.js
const AppConfigs = {
    default: {
      useFirebase: false,
      siteHomeURL: null,
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
      pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      fieldUrl: process.env.PUBLIC_URL + '/img/field_default.svg',
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
      ballHref: process.env.PUBLIC_URL + '/elements/handball_ball.svg',
      fieldUrl: process.env.PUBLIC_URL + '/elements/handball_field.svg',
      backgroundImg: process.env.PUBLIC_URL + '/img/wood_floor.jpg',
      goals: true
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
      ballHref: process.env.PUBLIC_URL + '/elements/rugby_ball.svg',
      fieldUrl: process.env.PUBLIC_URL + '/elements/rugby_field.svg',
      backgroundImg: process.env.PUBLIC_URL + '/img/grass_floor.jpg',
      goals: false
    },
    hockey: {
      useFirebase: false,
      siteHomeURL: '/',
      siteLogoURL: process.env.PUBLIC_URL + '/img/logo-toools.png',
    //   pitchCenterADURL: process.env.PUBLIC_URL + '/img/isquad-blanco-completo.png',
      pitchCenterADURL: null,
      signInURL: '/Account/LoginRegister',
      signOutURL: '/Account/LogOff',
      getUserURL: '/Account/GetUser',
      saveURL: '/TacticsBoard/SaveTactic',
      loadURL: '/TacticsBoard/TacticsLoad',
      loadSharedURL: '/TacticsBoard/TacticsLoadShared',
      listURL: '/TacticsBoard/GetTacticsList',
      deleteURL: '/TacticsBoard/DeleteTactic',
      thumbnailWidth: 1880,
      ballHref: process.env.PUBLIC_URL + '/elements/hockey_ball.svg',
      fieldUrl: process.env.PUBLIC_URL + '/elements/hockey_field.svg',
      backgroundImg: process.env.PUBLIC_URL + '/img/grass_floor.jpg',
      goals: true
    },
  };
  
  export default AppConfigs;
  