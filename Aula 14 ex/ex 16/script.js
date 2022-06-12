function verificar(){

    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.querySelector('div#res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Impossível de contar!');
    }
    else{
       res.innerHTML = 'Contando: ';
       
       let finicio = Number(inicio.value);
       let ffim = Number(fim.value);
       let fpasso = Number(passo.value);

       if (fpasso == 0){
        fpasso = 1
       }

       if (finicio < ffim){
            for (let cont = finicio; cont <= ffim; cont += fpasso){
                res.innerHTML += `${cont} 👉`
            }
       }else {
            for(let cont = finicio; cont >= ffim; cont -= fpasso){
                res.innerHTML += `${cont} 👉`
            }
        }
        res.innerHTML += `🏁`
       }
    
}