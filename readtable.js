// javascript-and-jquery-book-code-0915/c04/index.html



var rows=document.getElementsByTagName('table')[0].rows;

function getCellContent(c){
 return c.textContent;
}

for(var i=0; i<rows.length; i++){
  console.log(getCellContent(rows[i].cells[1]));
}