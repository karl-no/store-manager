const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
chai.use(sinonChai);

const productsControllers = require('../../../src/controllers/products.controller');
const productsServices = require('../../../src/services/products.service');
const productsControllersMock = require('./mocks/productsControllers.mock');

describe('Verifica as funções na camada Controllers', function () {
  afterEach(sinon.restore);

  it('A função getProducts retorna status "200" e os produtos', async function () {
    // Arrange
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, "getProducts").resolves({ message: productsControllersMock.everyProduct });

    // Act
    await productsControllers.getProducts(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsControllersMock.everyProduct);
  });

  it('A função getProductsById retorna status "200" e o produto do id informado por parâmetro', async function () {
    // Arrange
    const req = productsControllersMock.requisitionGetProductsById;
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, "getProductsById").resolves(productsControllersMock.productById);

    // Act
    await productsControllers.getProductsById(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsControllersMock.productById.message);
  });

  it('A função getProductsById retorna status "404" quando o id informado é inválido', async function () {
    // Arrange
    const req = productsControllersMock.errorGetProductsById;
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, "getProductsById").resolves(productsControllersMock.errorMessage);

    // Act
    await productsControllers.getProductsById(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: productsControllersMock.errorMessage.message });
  });

});