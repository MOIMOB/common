import { AppStore } from './app-store';

export interface ContactFormModel {
    email: string;
    applicationName: string;
    messageType: string;
    message: string;
    json: string;
    appStore: AppStore;
}
