declare module "@mapbox/polyline";

declare var cordova: Cordova;
declare var global: window;
declare var google: google;

interface Cordova {
  file: {
    documentsDirectory: string;
    resolveLocalFilesystemURL: any;
    dataDirectory: any;
  };
  plugins: any;
  platformId: any;
}

interface window {
  routes: any;
  routeMaker: any;
  store: any;
  plugins: any[];
  searchKey: string;
  resolveLocalFileSystemURL: any;
  OneSignal: any;
}

interface google {
  maps: any;
  // maps: {
  //   Map: any[];
  //   Marker: any
  // };
}
