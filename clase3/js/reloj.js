    var txtReloj = document.getElementById('txtReloj');

    function reloj()
    {
        //creamos un objeto de fecha
        var fecha = new Date();

        //obtenemos horas
        var horas = fecha.getHours();
        //minutos
        var minutos = fecha.getMinutes();
            if( minutos < 10 ){
                minutos = '0'+minutos;
            }
        //segundos
        var segundos = fecha.getSeconds();
            if( segundos < 10 ){
                segundos = '0'+segundos;
            }
        //escribimos en el span
        txtReloj.innerText = horas +':'+ minutos +':'+ segundos;
    }

    reloj();
    setInterval( reloj, 1000 );