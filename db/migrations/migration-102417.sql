\c squeakinc_dev

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS persons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  website VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);

CREATE TABLE IF NOT EXISTS user_projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  user_id INT REFERENCES users(id)
);