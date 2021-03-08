    //ubicamos elemento dentro del DOM
    var caja = document.getElementById('caja');

    //declaramos funciones
    function ocultar()
    {
        caja.style.display = 'none';
    }
    function mostrar()
    {
        caja.style.display = 'block';
    }
    function mostrarOcultar()
    {
        if( caja.style.display == 'none' ){
            mostrar();
        }
        else {
            ocultar();
        }
    }


