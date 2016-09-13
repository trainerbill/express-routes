import { BaseModule } from '@modern-mean/server-base-module';
import config from './config';
import logger from './logger';


export class ExpressRoutes extends BaseModule {

  constructor(...args) {
    //Push default configuration to front of array.  Passed in configuration from ...args should take precedence.
    args.unshift({ config: config(), logger: logger() });
    super(...args);

    this.config = this.getConfigModule().get();
    this.logger = this.getLoggerModule().get();

  }

  get() {
    return this;
  }

}
