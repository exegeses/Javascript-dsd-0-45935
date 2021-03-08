    var  cajaDado = document.getElementById('cajaDado');

    function rollear()
    {
        //obtenemos un número aleatorio
        var numeroAleatorio = Math.random(); // 0 ~ 1
            console.log( numeroAleatorio );

        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
            console.log( numeroMultiplicado );

        var numero = Math.round( numeroMultiplicado );
            console.log( numero )

        //mostramos una imagen en el figure
        cajaDado.innerHTML = '<img src="dados/dado'+numero+'.png">';
    }

    rollear();