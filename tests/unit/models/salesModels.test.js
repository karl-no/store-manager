const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const salesModel = require('../../../src/models/sales.model');
const salesModelsMock = require('./mocks/salesModels.mock');

describe('Verifica as funções na camada Models das vendas', function () {
  afterEach(sinon.restore);

  it('Testa a função postSale', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: salesModelsMock.insertId}]);

    // Act
    const result = await salesModel.postSale();

    // Assert
    expect(result).to.be.deep.equal(salesModelsMock.insertId);
  });

  it('Testa a função postSaleByProduct', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves();

    // Act
    await salesModel.postSaleByProduct(...salesModelsMock.paramsPostSaleProduct);

    // Assert
    expect(connection.execute).to.have.been.calledWith(
      salesModelsMock.executeConnection.query,
      salesModelsMock.executeConnection.values
    );
  });

  it('Testa a função selectAllSales', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([salesModelsMock.allSales]);

    // Act
    const result = await salesModel.selectAllSales();

    // Assert
    expect(result).to.be.deep.equal(salesModelsMock.allSales);
  });

  it('Testa a função selectSaleById', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([salesModelsMock.salesProductResponse]);

    // Act
    const result = await salesModel.selectSaleById(1);

    // Assert
    expect(result).to.be.deep.equal(salesModelsMock.salesProductResponse);

  });
});