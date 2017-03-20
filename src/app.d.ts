
declare module App {
  interface Service {
    name: string;
    url: string;
  }

  export interface Configuration {
    isDev: Boolean
    services: Service[];
  }
}


declare var AppConfig: App.Configuration;
declare var require: any;