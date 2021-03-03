/*##########################
 *  03/03/2021
 * */
    //ubicamos elemento dentro del DOM
    var txt = document.getElementById('txt');

    //creamos un objeto de fecha
    var fecha = new Date();
    //obtenemos número del día del mes
    var diaMes = fecha.getDate();
        if( diaMes < 10 ){
            diaMes = '0' + diaMes;
        }
    //obtenemos el numero del mes
    var mes = fecha.getMonth() + 1;
        if( mes < 10 ){
            mes = '0' + mes;
        }
    //obtenemos el año
    var anio = fecha.getFullYear();

/*  Día de la semana  */
/*  domingo 0
    lunes 1
    martes 2
    ...
    sábado 6
* */
    var dia = fecha.getDay();
    var semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                 ];

    //mostramos el texto en el span
    txt.innerText = semana[dia] +' '+ diaMes +'/'+ mes +'/'+ anio;
