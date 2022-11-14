import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Tranter QA',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: "http",
    allowNavigation: [
      "http://192.168.1.13:3001"
    ],
    cleartext: true,
  }
};


export default config;
