import idb from 'idb';

export async function add(value) {
  let db = await idb.open('tetris', 1);
  let tx = db.transaction('scores', 'readwrite');
  let store = tx.objectStore('scores');
  await store.add({value});
}

export async function getAll() {
  let db = await idb.open('tetris', 1);
  let tx = db.transaction('scores', 'readonly');
  let store = tx.objectStore('scores');
  const result = await store.getAll();
  return result;
}