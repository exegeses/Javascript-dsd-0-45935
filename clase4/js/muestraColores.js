    //ubicamos elemento dentro del DOM
    var muestras = document.getElementById('muestras');

    //colecciones de colores
    var colores = [
                    'rojo', 'naranja', 'verde',
                    'rosa', 'azul', 'dorado',
                    'amarillo', 'violeta', 'turquesa'
                   ];
    var codigos = [
                    '#d00', '#f60', '#0d0',
                    '#e99', '#00d', '#DAA520',
                    '#ff0', '#e3e', '#40E0D0'
                  ];

    //generación de HTML
    var cantidad = colores.length;
    muestras.innerHTML = '';
    for ( var n=0; n<cantidad; n++ ) {
        muestras.innerHTML += '<i style="background-color: '+codigos[n]+'"></i>' +colores[n]+ '<br>';
    }

    /*
    <i style="background-color: #ccc"></i> nombre de color <br>
    * */
