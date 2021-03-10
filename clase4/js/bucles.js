//ubicamos elementos dentro del DOM
    var txt = document.getElementById('txt');
    var parrafo = document.getElementById('parrafo');
    var lista = document.getElementById('lista');

    var marcas = [
                    'LG', 'Motorola', 'Xiaomi',
                    'Huawei', 'Samsung', 'Alcatel'
                 ];
    txt.innerText = marcas[2];

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


