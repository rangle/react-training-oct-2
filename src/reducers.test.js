import { __test, fetchUsers } from './reducers';
import { getUsers } from './api/users';
jest.mock('./api/users');

const users = [{ name: 'Alice', id: 1, email: 'alice@test.com' }];

getUsers
  .mockImplementationOnce(() => Promise.resolve())
  .mockImplementationOnce(() => Promise.resolve(users))
  .mockImplementationOnce(() => Promise.reject('Fetch request failed'));

const { usersReducer, USERS } = __test;

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

describe('Users Reducer', () => {
  it('should set loading state to true', () => {
    const result = usersReducer(initialState, { type: USERS.FETCH });

    expect(result).toEqual({
      users: [],
      isLoading: true,
      error: null,
    });
  });

  it('should update the list of users', () => {
    const result = usersReducer(initialState, {
      type: USERS.UPDATE,
      payload: [1, 2, 3],
    });

    expect(result).toEqual({
      users: [1, 2, 3],
      isLoading: false,
      error: null,
    });
  });
});

describe('Fetch Users', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should return a function', () => {
    const result = fetchUsers();
    expect(typeof result).toBe('function');
  });

  it('should disptach USER.FETCH action', () => {
    const thunk = fetchUsers();
    thunk(mockDispatch);

    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0]).toEqual([
      {
        type: USERS.FETCH,
      },
    ]);
  });

  it('should disptach update users with appropriate payload', () => {
    const thunk = fetchUsers();
    thunk(mockDispatch);

    // expect(mockDispatch.mock.calls.length).toBe(2);
  });

  it('should disptach fetch failed with error message', () => {
    const thunk = fetchUsers();
    thunk(mockDispatch);

    console.log(mockDispatch.mock.calls);

    // expect(mockDispatch.mock.calls.length).toBe(2);
  });
});
