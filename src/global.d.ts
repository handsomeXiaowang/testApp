export {};

declare global {
  interface Window {
    t: (key: string) => string;
    ByteLiveWebSDK: any;
  }

}
