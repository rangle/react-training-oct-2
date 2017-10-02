import { get } from './client';

function normalizeUsers(users) {
  return users.map(user => ({
    uid: user.id,
    name: user.name,
    email: user.email,
  }));
}

export function getUsers() {
  return get('/users').then(normalizeUsers);
}
