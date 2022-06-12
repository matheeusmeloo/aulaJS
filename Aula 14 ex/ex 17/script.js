function gerar(){
    var num = document.getElementById('num');
    var res = document.getElementById('res');

    if(num == 0){
        window.alert('Precisa digitar um número')
    }else {
        for(let i = 0; i < 11; i++){
           res.innerHTML(`${num} x ${i} = ` + num*i) 
      //      console.log(`${num} x ${i} = ` + num*i)
        }
   }
}