'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickExecute() {
  var choice = $('input[name=what]:checked').val();
  console.log(choice);

 switch (choice) {
    case "1":
    $.get('php/1-get-html-article.php', ajaxGetHtmlArticle);
    break;

    case '2':
    $.getJSON('php/2-get-json-data.php', ajaxGetJasonData);
    break;

    case '3':
    $.get('php/3-get-html-movies.php', ajaxGetHtmlArticle);
    break;

  }

}
