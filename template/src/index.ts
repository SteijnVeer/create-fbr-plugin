import type { Server } from '@steijnveer/file-based-router';
import '@steijnveer/file-based-router/utils';
import type { MyPluginConfig } from './types';

function myPlugin({  }: MyPluginConfig = {}) {
  return (server: Server) => {
    // Initialize your plugin here, using the server instance
    log.debug('My plugin has been initialized');
  };
}


export default myPlugin;
export type * from './types';
export { myPlugin };

