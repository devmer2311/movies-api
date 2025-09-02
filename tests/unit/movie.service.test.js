// tests/unit/movie.service.test.js
const movieService = require('../../src/services/movie.service');
const movieDao = require('../../src/dao/movie.dao');

jest.mock('../../src/dao/movie.dao');

describe('Movie Service - unit', () => {
  afterEach(() => jest.resetAllMocks());

  test('listMovies returns array', async () => {
    movieDao.findAll.mockResolvedValue([{ id: '1', title: 'A' }]);
    const res = await movieService.listMovies();
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(1);
  });

  test('getMovie throws when not found', async () => {
    movieDao.findById.mockResolvedValue(null);
    await expect(movieService.getMovie('no-id')).rejects.toMatchObject({ status: 404 });
  });

  test('createMovie calls dao.create', async () => {
    const payload = { title: 'New' };
    movieDao.create.mockResolvedValue({ id: 'x', ...payload });
    const res = await movieService.createMovie(payload);
    expect(res.title).toBe('New');
    expect(movieDao.create).toHaveBeenCalledWith(payload);
  });

  test('updateMovie throws when not found', async () => {
    movieDao.updateById.mockResolvedValue(null);
    await expect(movieService.updateMovie('id', { title: 'a' })).rejects.toMatchObject({ status: 404 });
  });

  test('deleteMovie throws when not found', async () => {
    movieDao.deleteById.mockResolvedValue(null);
    await expect(movieService.deleteMovie('id')).rejects.toMatchObject({ status: 404 });
  });
});
