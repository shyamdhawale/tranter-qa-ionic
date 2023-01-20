import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Tranter QA",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    androidScheme: "http",
    allowNavigation: ["http://10.3.1.192"],
    cleartext: true,
  },
};

export default config;
