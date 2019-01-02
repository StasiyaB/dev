/*La liste des produits (nom et valeur du stock à la vente) des années 1960 */

SELECT productName, (quantityInStock * MSRP) AS stockValue
FROM products
WHERE productName LIKE '196%'

/* RESULTAT ==> 16 lignes / 1969 Harley Davidson Ultimate Chopper */
