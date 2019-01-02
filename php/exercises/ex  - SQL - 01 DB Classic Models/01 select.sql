SELECT addressLine1, addressLine2, city, country, state
FROM offices

SELECT addressLine1, addressLine2, city, country, state
FROM offices WHERE officeCode = 1

SELECT productCode, productName
FROM products
WHERE productLine = 'Planes'

SELECT * // means all
FROM products
WHERE productLine = 'Motorcycles'

SELECT *
FROM products
WHERE productLine = 'Motorcycles'
ORDER BY productVendor DESC // means alphabetically

SELECT *
FROM products
WHERE productLine = 'Motorcycles'
ORDER BY productVendor DESC, quantityInStock DESC

SELECT productCode, productName, productScale, quantityInStock
FROM products
WHERE productScale IN ('1:10', '1:18')
ORDER BY quantityInStock DESC

/* La liste des produits (nom, vendeur et prix de vente) qui sont vendus au moins 132$ triés par nom du produit */
SELECT productName, productVendor, MSRP
FROM products
WHERE MSRP >= 132
ORDER BY productName


SELECT productCode, productName, buyPrice
FROM products
WHERE buyPrice BETWEEN 60 AND 90
ORDER BY buyPrice
