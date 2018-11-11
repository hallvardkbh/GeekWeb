// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBxrRLx2RI2ELScNBNMvB9u1jMjucwHW4E',
    authDomain: 'sc2-replay-3ac67.firebaseapp.com',
    databaseURL: 'https://sc2-replay-3ac67.firebaseio.com',
    projectId: 'sc2-replay-3ac67',
    storageBucket: 'sc2-replay-3ac67.appspot.com',
    messagingSenderId: '959428777702'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
