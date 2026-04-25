import './types';

function myPlugin() {
  // Initialize your plugin here, using the server instance (Fbr.server) and the configuration (Fbr.config) if needed
  // Fbr.server.someMethod = () => { ... };
  // const someValue = Fbr.config.myPlugin?.someOption ?? 'default value';
  log.debug('My plugin has been initialized');
}


export default myPlugin;
export type * from './types';
export { myPlugin };

