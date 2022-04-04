const connection = require('../../config/connection');

const getProductsQuery = ({
  perPage = 9,
  page = 1,
  maxPrice = 1000,
  minPrice = 0,
  rate = -1,
  name = '',
  category = '',
}) => connection.query(
  `
    SELECT p.id,
      p.name,
      p.price,
      p.discount,
      p.image,
      p.rate,
      c.name as category
      FROM products p
          LEFT JOIN categories c
                  ON p.category_id = c.id
          WHERE (p.price <= $3 AND p.price >= $4) AND (p.name LIKE $6) AND (c.name IS NULL OR c.name LIKE $7) AND (($5 = -1) OR (p.rate = $5 AND $5 > -1 AND $5 < 6))
      ORDER BY p.id DESC
      LIMIT $1 OFFSET ($2 - 1) * $1
    `,
  [perPage, page, maxPrice, minPrice, rate, `%${name}%`, `%${category}%`],
);
module.exports = getProductsQuery;
