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

export function getFilteredUsers(users, query) {
  return users.filter(user => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });
}

export function getUserByID(uid, users) {
  return users.find(user => user.uid === uid);
}
