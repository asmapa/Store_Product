CREATE TABLE IF NOT EXISTS product_store(
    id serial primary key,
    name varchar(255) not null,
    image varchar(255) not null,
    price decimal(10,2) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

