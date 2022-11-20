const { expect } = require('chai');
const sinon = require('sinon');

const salesServices = require('../../../src/services/sales.service');

const salesModel = require('../../../src/models/sales.model');
const salesServicesMock = require('./mocks/salesServices.mock');

describe('Verifica as funções na camada Services das vendas', function () {
  afterEach(sinon.restore);

  it('A função selectAllSales retorna todas as vendas', async function () {
    // Arrange
    sinon.stub(salesModel, 'selectAllSales').resolves(salesServicesMock.allSales);

    // Act
    const { message } = await salesServices.selectAllSales();

    // Assert
    expect(message).to.be.deep.equal(salesServicesMock.allSales);
  });

  it('A função selectSaleById retorna um produto com o id passado por parâmetro', async function () {
    // Arrange
    sinon.stub(salesModel, 'selectSaleById').resolves(salesServicesMock.salesByIdCorrectInfo);

    // Act
    const { message } = await salesServices.selectSaleById(salesServicesMock.saleId);

    // Assert
    expect(message).to.be.deep.equal(salesServicesMock.salesByIdCorrectInfo);
  });

  it('Se for passado um id inexistente, deve ser retornada a mensagem de erro', async function () {
    // Arrange
    sinon.stub(salesModel, 'selectSaleById').resolves([]);

    // Act
    const result = await salesServices.selectSaleById(salesServicesMock.incorrectSaleId);
    
    // Assert
    expect(result.message).to.be.deep.equal('Sale not found');
    expect(result.type).to.be.deep.equal('NOT_FOUND');
  })
});