    //ubicar elemento dentro del DOM
    var caja2 = document.getElementById('caja2');
    //modificaciones iniciales
    caja2.style.position = 'relative';
    caja2.style.top = '100px';
    caja2.style.left = '100px';

    //variable auxiliar
    var grados = 0;
    //funcion de control
    function rotar()
    {
        grados = grados + 2;
        caja2.style.transform = 'rotate('+grados+'deg)';

        //cambio de color
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        caja2.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }

    //invocamos la función
    rotar();
    //actualizamos la función
    setInterval( rotar, 100 )