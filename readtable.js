// javascript-and-jquery-book-code-0915/c04/index.html



var rows=document.getElementsByTagName('table')[0].rows;

function getCellContent(c){
 return c.textContent;
}

for(var i=0; i<rows.length; i++){
  console.log(getCellContent(rows[i].cells[1]));
}

/***********************************************************/

var rsContent=[];

//Add values to rsContent
for(var i=0; i<rows.length; i++){
    rsContent[i]=getCellContent(rows[i].cells[1]);
}

//Show values of rsContent
console.log(rsContent);

//Clear table values
for(var i=0; i<rows.length; i++){
    rows[i].cells[1].textContent='';
}

//Reset table values from saved rsContent
for(var i=0; i<rows.length; i++){
    rows[i].cells[1].textContent=rsContent[i];
}

/***********************************************************/

//Create a new table
var tb2 = document.createElement("table");

//Append table to browser
document.body.append(tb2);

//Add a new row with value test
tb2.insertRow().insertCell().textContent='test';

//Delete test record
tb2.deleteRow(0);

for(var i=0; i<rsContent.length; i++){
    tb2.insertRow().insertCell().textContent=rsContent[i];
}

/***********************************************************/

for (var i = 0; i < tb.rows.length; i++) {
    var r = tb.rows[i];
    for (var j = 1; j < r.cells.length; j++) {
        r.cells[j].style.backgroundColor = 'blue';
    }
}

/***********************************************************/

document.body.textContent = '';

var tb = document.createElement('table');

document.body.append(tb);

for (var i = 0; i < 10; i++) {
    var r = tb.insertRow();
    r.insertCell().textContent = '[';
    for (var j = 0; j < 10; j++) {
        r.insertCell().textContent = '"' + i + j + '"';
        if (j < 9) r.insertCell().textContent = ',';
    }
    r.insertCell().textContent = '],';
}

/***********************************************************/

document.body.textContent = '';

var tb = document.createElement('table');

document.body.append(tb);

for (var i = 0; i < 30; i++) {
    var r = tb.insertRow();
    for (var j = 0; j < 30; j++) {
        var c=r.insertCell();
         c.textContent = 'X';
         if(Math.abs(i-j)<5 || Math.abs(i+j-29)<5) 
              c.style.color='red';
        
    }
}


/***********************************************************/

document.body.textContent='';
var tb= document.createElement('table');
document.body.append(tb);

for (var i = 0; i < arrNumbers.length; i++) {
    var r = tb.insertRow();
    if (i % 2 == 0) r.setAttribute('class', 'blue');
    else r.setAttribute('class', 'gray');
    var arr2 = arrNumbers[i];
    for (var j = 0; j < arr2.length; j++) {
        var c = r.insertCell();
        c.textContent = arr2[j];
    }
}

/***********************************************************/