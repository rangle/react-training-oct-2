import { getUsers } from './users';
import { get } from './client';

jest.mock('./client');

const users = [{ id: 1, name: 'Alice', email: 'alice@test.com' }];

get.mockImplementation(() => Promise.resolve(users));

describe('Users/get', () => {
  it('should call get with the appropriate endpoint url', () => {
    getUsers().then(() => {
      expect(get.mock.calls[0]).toEqual(['/users']);
    });
  });

  it('should return a normalized list of users', () => {
    getUsers().then(users => {
      expect(users).toEqual([
        {
          uid: 1,
          name: 'Alice',
          email: 'alice@test.com',
        },
      ]);
    });
  });
});
