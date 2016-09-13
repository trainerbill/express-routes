export default () => {
  return {
    test: process.env.EXPRESSROUTES_TEST || 'test'
  };
};
