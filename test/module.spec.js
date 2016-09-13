import { ExpressRoutes } from '../src/module';


let sandbox,
  moduleTest;

describe('/src/module', () => {

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    return moduleTest = new ExpressRoutes();
  });

  afterEach(() => {
    return sandbox.restore();
  });


  describe('constructor', () => {

    it('should be an object', () => {
      return moduleTest.should.be.an('object');
    });

    it('should be instance of ExpressRoutes', () => {
      return expect(moduleTest instanceof ExpressRoutes).to.equal(true);
    });

  });

  describe('get', () => {

    it('should return itself', () => {
      return expect(moduleTest.get() instanceof ExpressRoutes).equal(true);
    });

  });

});
