/* Le prix moyen d'un produit vendu par chaque vendeur triés par prix moyen décroissant */

SELECT productVendor, AVG(MSRP) AS averagePrice
FROM products
GROUP BY productVendor
ORDER BY averagePrice DESC

/* Le nombre de produits pour chaque ligne de produit */
SELECT productLine, COUNT(productCode)
FROM products
GROUP BY productLine

/* Le total du stock et le total de la valeur du stock à la vente de chaque ligne de produit pour les produits vendus plus de 100$ trié par total de la valeur du stock à la vente */
SELECT productLine, SUM(quantityInStock) AS totalStock, SUM(quantityInStock * MSRP) AS totalStockValue
FROM products
WHERE MSRP > 100
GROUP BY productLine
ORDER BY totalStockValue

/* La quantité du produit le plus en stock de chaque vendeur trié par vendeur */
SELECT productVendor, MAX(quantityInStock) AS maxInStock
FROM products
GROUP BY productVendor
ORDER BY productVendor

/* Le prix de l'avion qui coûte le moins cher à l'achat */
SELECT MIN(buyPrice) AS cheapestPricePlane
FROM products
WHERE productLine = 'Planes'

/* Le crédit des clients qui ont payé plus de 20000$ durant l'année 2004 trié par crédit décroissant */
SELECT customerNumber, SUM(amount) AS totalCredit
FROM payments
WHERE paymentDate BETWEEN '2004-01-01' AND '2004-12-31'
GROUP BY customerNumber
HAVING totalCredit > 20000
ORDER BY totalCredit DESC

/* La liste des motos (nom, vendeur, quantité et marge) triés par marge décroissante */
SELECT productName, productVendor, quantityInStock, (MSRP - buyPrice) AS margin
FROM products
WHERE productLine = 'Motorcycles'
ORDER BY margin DESC

/* La liste des commandes (numéro, date de commande, date d'expédition, écart en jours entre les deux dates et statut) qui sont en cours de traitement ou qui ont été expédiées et ont un écart de plus de 10j triés par écart décroissant puis par date de commande */


SELECT orderNumber, orderDate, shippedDate, (shippedDate - orderDate) AS processTime, status
FROM orders
WHERE status = 'In Process' OR (status = 'Shipped' AND (shippedDate - orderDate) > 10)
ORDER BY processTime DESC, orderDate
