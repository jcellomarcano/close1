// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    region: 'us-east-1',

    identityPoolId: 'us-east-1:b481003b-afd2-4fe7-926e-054f2e8dada5',
    userPoolId: 'us-east-1_Rfbf4e9wD',
    clientId: '7msn3s7fel7rqpgjhark09vk0',

    ddbTableName: 'LoginTrail',

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
