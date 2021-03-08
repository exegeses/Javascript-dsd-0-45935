//maneras de ubicar elementos
    //document.getElementById();

    //guardamos todos los li
    var lis = document.getElementsByTagName('li');
        console.log(lis);
    //modificamos el tercer li
    lis[2].style.color =  '#f90';

    //guardamos los elementos con la clase .negrita
    var negritas = document.getElementsByClassName('negrita');
        console.log(negritas);
    //modificamnos el tercer span con la clase negrita
    negritas[2].style.color = '#f90';