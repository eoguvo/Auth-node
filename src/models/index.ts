import db from '../database';

db.query(`CREATE TABLE IF NOT EXISTS users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(72) NOT NULL,
  role VARCHAR(50) DEFAULT 'USER'
);`)