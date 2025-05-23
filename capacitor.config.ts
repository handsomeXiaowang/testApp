import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anhe.khmall',
  appName: 'ionic-app-base',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
  },
};

export default config;
