const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const productsModel = require('../../../src/models/products.model');
const productsModelsMock = require('./mocks/productsModels.mock');

describe('Verifica as funções na camada Models', function () {
  afterEach(sinon.restore);

  it('Testa a função selectAllProducts', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([productsModelsMock.everyProduct]);

    // Act
    const result = await productsModel.selectAllProducts();

    // Assert
    expect(result).to.be.deep.equal(productsModelsMock.everyProduct);

  });

  it('Testa a função selectProductById', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[productsModelsMock.productById]]);

    // Act
    const result = await productsModel.selectProductById(1);

    // Assert
    expect(result).to.be.deep.equal(productsModelsMock.productById);

  });
});