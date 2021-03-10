//ubicamos elementos dentro del DOM
    var txt = document.getElementById('txt');
    var parrafo = document.getElementById('parrafo');
    var lista = document.getElementById('lista');
    var lista2 = document.getElementById('lista2');

/* colecciones de datos */
    var marcas = [
                    'LG', 'Motorola', 'Xiaomi',
                    'Huawei', 'Samsung', 'Alcatel'
                 ];
    txt.innerText = marcas[2];
    var italianos = [
                        'Maseratti', 'Pagani', 'Ferrari',
                        'Alfa Romeo', 'Lancia', 'Lamborghini',
                        'Abarth', 'Fornasari'
                    ];

    // bucle while
    var n = 1;
    parrafo.innerHTML = '';
    while ( n < 10 ) {
        parrafo.innerHTML = parrafo.innerHTML + n +'<br>';
        n++; //n = n+1
    }

    // mostrando items de lista
    n = 0;
    var cantidad = marcas.length;
    lista.innerHTML = '';
    while( n < cantidad ){
        lista.innerHTML = lista.innerHTML + '<li>'+marcas[n]+'</li>';
        n++;
    }

    // autos italianos
    var cantidad = italianos.length;
    lista2.innerHTML = '';
    for ( n=0; n < cantidad; n++ ){
        lista2.innerHTML = lista2.innerHTML +'<li>'+ italianos[n]+'</li>';
    }

