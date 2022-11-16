const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../src/services/products.service');

const productsModel = require('../../../src/models/products.model');
const productsServicesMock = require('./mocks/productsServices.mock');

describe('Verifica as funções na camada Services', function () {
  afterEach(sinon.restore);

  it('A função getProducts retorna todos os produtos', async function () {
    // Arrange
    sinon.stub(productsModel, 'selectAllProducts').resolves(productsServicesMock.everyProduct);

    // Act
    const result = await productsServices.getProducts();

    // Assert
    expect(result).to.be.deep.equal({ message: productsServicesMock.everyProduct });

  })


  it('A função getProductsById retorna um produto com o id passado por parâmetro', async function () {
    // Arrange
    sinon.stub(productsModel, 'selectProductById').resolves(productsServicesMock.productById);

    // Act
    const result = await productsServices.getProductsById(1);

    // Assert
    expect(result).to.be.deep.equal({ type: null, message: productsServicesMock.productById });
  })


  it('A função getProductsById retorna um erro caso o id seja inválido', async function () {
    // Arrange
    sinon.stub(productsModel, 'selectProductById').resolves(null);

    // Act
    const result = await productsServices.getProductsById(5);
    expect(result).to.be.deep.equal(productsServicesMock.errorMessage);

    // Assert
  })
});