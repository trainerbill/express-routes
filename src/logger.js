export default () => {
  //https://github.com/winstonjs/winston
  return {
    winston: {
      level:  process.env.EXPRESSROUTES_LOG_LEVEL,
      file: process.env.EXPRESSROUTES_LOG_FILE,
      console: process.env.EXPRESSROUTES_LOG_CONSOLE
    }
  };
};
