var param = 'numero';  //exactly what you sent from your main.js
var param2 = 'nome';  //exactly what you sent from your main.js

var sheet_name = 'log';
var ss_id = 'id_da_sua_planilha';

function doPost(request_post){
   var value = request_post.parameter[param];
   var value2 = request_post.parameter[param2];

  if( value == undefined|| value2 == undefined){
      return;
    }
  else{
      parseToSheet(value, value2);
    }
}


function parseToSheet(value, value2){

  //
  //Set output spreadsheet   
  //  
  var ss = SpreadsheetApp.openById(ss_id);
  var sheet = ss.getSheetByName(sheet_name);

  //
  // Hold sheets info
  //  
  var output_cell; //output cells 
  var out;         //a two-dimensional array of values
  
  //
  //Setup the start cell on sheet   
  //  
  var start_offset = 
    { 
      x: 1,
      y: 1 
    };
  var end_offset = 
    {
      x: 2,
      y: 2
    };

  
  if ( sheet.getLastRow() < 1) sheet.getRange("A1").setValue('start');
  
  //
  // Write info   
  //  
  out = [ [value,value2] ];
  
  //sheet.getRange(start_row, start_column, numRows, numColumns)
  output_cell = sheet.getRange(sheet.getLastRow()+1,start_offset.x , 1, end_offset.x);
  output_cell.setValues(out);
  
}