SELECT 
cashier.name AS cashier,
product.name AS product,
category.name AS category,
product.price AS price
 FROM product JOIN cashier ON cashier.id = product.id_cashier 
JOIN category ON category.id = product.id_category
