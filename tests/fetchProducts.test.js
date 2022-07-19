require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

// Requirement #1
describe('1 - Teste a função fetchProducts', () => {
  // #1.1
  it('should be a function', () => {
    expect.assertions(1);

    expect(typeof fetchProducts).toBe('function');
  });

  // #1.2
  it("should call fetch when passed the 'computer' parameter", async () => {
    expect.assertions(1);

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // #1.3
  it('should use the "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    expect.assertions(1);

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    );
  });

  // #1.4
  it('should return an object equal to computadrSearch', async () => {
    expect.assertions(1);

    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  // #1.5
  it('should throw an error when passed with no parameter', async () => {
    expect.assertions(1);
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
