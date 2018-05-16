// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

    firebase: {
      apiKey: "AIzaSyCjkvU9hHkpv1AhDQKp3kj__t8h2pAfcNI",
      authDomain: "gw-reservation.firebaseapp.com",
      databaseURL: "https://gw-reservation.firebaseio.com",
      projectId: "gw-reservation",
      storageBucket: "gw-reservation.appspot.com",
      messagingSenderId: "363556993172"
  }
};
