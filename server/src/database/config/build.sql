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
    qunatity INTEGER,
    PRIMARY KEY (user_id, product_id)
);

INSERT INTO
    users(name, email, password, isAdmin)
VALUES
    (
        'Nizar1',
        'nizar@gmail.com',
        '$2a$10$Bp9etHWYo1UAANX99Ju3LuEzTlH7d1mq8snUpUzV7UhfBlQwozIly',
        true
    );

COMMIT;