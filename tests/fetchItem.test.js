require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // Requirement #3

  // 3.1
  it('should be a function', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  // 3.2
  it('fetch should be called with item argument ex: "fetchItem("MLB1615760527")"', async () => {
    expect.assertions(1);

    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // 3.3
  it('fetch should be called with the correct url', async () => {
    expect.assertions(1);

    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  // 3.4
  it('should return an object equal to item', async () => {
    expect.assertions(1);

    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  // 3.5
  it('should throw an error when passed with no parameter', async () => {
    expect.assertions(1);
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
