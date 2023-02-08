export interface ContactFormModel {
    email: string;
    applicationName: ApplicationName;
    messageType: string;
    message: string;
    json: string;
    appStore: AppStore;
}

export type ApplicationName = 'Drinkable' | 'Monthly Bill Planner' | 'Shut the Box';

export enum AppStore {
    Unknown = 0,
    PlayStore = 1,
    AppStore = 2,
    FDroid = 3
}
