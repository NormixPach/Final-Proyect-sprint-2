/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// Esto es para la visualización de las graficas

function students(){//se crea una funcion para guardar los datos de estudiantes
  var suma = 0;//se guarda una suma en cero
  var estudiantesActivas = 0;//se guarda dato en cero
  var estudiantesInactivas = 0;//se guarda dato en cero
  //se hace una for in para llamar a los datos de estudiantes
  for (var i in data.AQP['2016-2'].students) {//ingresas a los datos
    if (data.AQP['2016-2'].students[i].active == true) {//si en mis datos hay estudiantes activas
       estudiantesActivas = estudiantesActivas +1;//sumamelas 1 por 1
    }else {//si no
      estudiantesInactivas = estudiantesInactivas +1;//suma 1 por 1 las estudiantes inactivas
    }
    console.log(data.AQP['2016-2'].students[i].active);//mustrame los datos totales
    suma = suma + 1; //suma 1 + 1
  }
  console.log(suma);//Muestrame la suma
  console.log(estudiantesActivas);//Muestrame total estudiantes activas
  console.log(estudiantesInactivas);//Muestrame estudiantes inactivas
  var porcentaje = estudiantesInactivas *100 / suma;//Se guarda el resultado de porsentaje
  console.log(porcentaje);//Muestrame el porcentaje
 drawChart(estudiantesActivas,estudiantesInactivas);// se une la grafica con los datos arrojados en mi función
 var newElement=document.createElement('p');//Se crea un nuevo elemento
 var nodoText=document.createTextNode('Total de estudiante en AQP (2016-2) '+ suma);//se crea un nodo dentro de nuestro nuevo elemento
 newElement.appendChild(nodoText);//se enlazan el nuevo elemento con el nuevo nodo
 document.getElementById('total').appendChild(newElement);//se une el nuevo elemento con nuestro documento
}

/*function overview(){

  document.getElementById('text1').innerText='Hola';
}*/
//function students(){
//  document.getElementById('text2').innerText='Hola';
//}
//function teacher(){
//  document.getElementById('text3').innerText='Hola';
//}



google.charts.load('current', {'packages':['corechart']});

// Ejecuta la visualización de la grafica
//google.charts.setOnLoadCallback(drawChart);

// Crea y rellena una tabla
function drawChart(activas,inactivas) {

  // Ingreso de datos
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['activas', activas],
    ['inactivas', inactivas],


  ]);

  // Establece options en la grafica
  var options = {'title':'Total en Porcentaje',
                 'width':600,
                 'height':500};

  // se da la visualización de la grafica y el tipo de grafica
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

/*function studentsSegunda(){
  var suma = 0;
  var estudiantesActivas = 0;
  var estudiantesInactivas = 0;
  for (var j in data.AQP[2017-1].students) {
     if (data.AQP[2017-1].students[j].) {

     }
  }*/





console.log(data);
