BEGIN;

DROP TABLE IF EXISTS users,
products,
cart,
categories CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password text NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name varchar(100)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    discount DECIMAL(5, 2),
    image text,
    rate INTEGER DEFAULT 0,
    category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE cart(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER,
    PRIMARY KEY (user_id, product_id)
);

INSERT INTO
    users(name, email, password, isAdmin)
VALUES
    (
        'Nizar1',
        'nizar@gmail.com',
        '$2b$10$cKOhzK0GHtdZHcctMm409OjVpEMut8VwyZ0fzgA9kXe/2/Uc8Yy4W',
        true
    );

INSERT INTO
    users(name, email, password, isAdmin)
VALUES
    (
        'nizar',
        'nizar1@gmail.com',
        '$2b$10$cKOhzK0GHtdZHcctMm409OjVpEMut8VwyZ0fzgA9kXe/2/Uc8Yy4W',
        false
    );

COMMIT;