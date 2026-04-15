import '@steijnveer/file-based-router/utils';

interface MyPluginConfig {
  // Define any configuration options for your plugin here
  [option: string]: never;
}

declare module '@steijnveer/file-based-router' {
  interface Server {
    /*
      * Add custom properties or methods to the Server interface here
    */
  }
}


export type { MyPluginConfig };

