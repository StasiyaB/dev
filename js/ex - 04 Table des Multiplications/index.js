'use strict';

var size = parseFloat(window.prompt('Taille de la Table des Multiplications?'));
var column;
var row;

document.write('<table>');

for (column = 1; column <= size; column++)  {
	document.write('<tr>');
	for(row = 1; row <= size; row++) {

		var result = row*column;

		if (row == column) {
			document.write('<td class="color">');

		} else {
			document.write('<td>');

		}

		document.write(result);
		document.write('</td>');
	}

	document.write('</tr>');
}

document.write('</table>');
