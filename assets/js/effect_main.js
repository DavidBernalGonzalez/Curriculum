var aText = new Array(
"Bienvenidos/as a mí curriculum:", 
" ",
"Antes de nada, me gustaría presentarme.",
"Mi nombre es David, tengo 27 años y ",
"vivo en Hospitalet de Llobregat (Barcelona).",
" ",
"Algunas de mis aficciones son la tecnología,",
"la música, el deporte, el ajedrez, el cine... ",
" ",
"Os invito a visitar los distintos apartados para",
"conocerme mejor.",
" ",
"Saludos",
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();