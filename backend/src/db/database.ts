import { DatabaseSync } from 'node:sqlite';

export function createDB() {
  const db = new DatabaseSync('./task.db');

  db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
  `);

  console.log('Tabela criada com sucesso!');

  return db;
}
