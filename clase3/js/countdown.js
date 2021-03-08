//ubicamos elementos dentro del DOM
    var txtDias = document.getElementById('dias');
    var txtHoras = document.getElementById('horas');
    var txtMinutos = document.getElementById('minutos');
    var txtSegundos = document.getElementById('segundos');

// función de control
    function cuentaRegresiva()
    {
        //objetos de inicio y fin
        var ahora = new Date();
        var fin = new Date(2021, 4, 25);
        //convertimos fechas a timestamp
        var actual = ahora.getTime();
        var evento = fin.getTime();
        //calculamos tiempo restante
        var restante = evento - actual;
        //obtenemos segundos, minutos, horas y dias
        var segundos = Math.floor(restante/1000);
        var minutos = Math.floor(segundos/60);
        var horas = Math.floor(minutos/60);
        var dias = Math.floor(horas/24);

        //obtenemos horas, minutos y segundos sobrantes
        horas = horas%24;
        minutos = minutos%60;
        segundos = segundos%60

        //agregarmos ceros iniciales
        if( horas < 10 ){
            horas = '0'+horas;
        }
        if ( minutos < 10 ){
            minutos = '0'+minutos;
        }
        if( segundos < 10 ) {
            segundos = '0' + segundos;
        }
        console.log(segundos)
        console.log(minutos)
        console.log(horas)
        console.log(dias)
        //mostramos datos en las cajas de texto
        txtDias.innerText = dias;
        txtHoras.innerText = horas;
        txtMinutos.innerText = minutos;
        txtSegundos.innerText = segundos
    }

    cuentaRegresiva();
    setInterval( cuentaRegresiva, 1000 );
