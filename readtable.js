// javascript-and-jquery-book-code-0915/c04/index.html



var rows=document.getElementsByTagName('table')[0].rows;
undefined
function getCellContent(c){
 return c.textContent;
}
undefined
for(var i=0; i<rows.length; i++){
  console.log(getCellContent(rows[i].cells[1]));
}