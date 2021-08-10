let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
    let peso = document.getElementById('peso').Value;
    let altura = document.getElementById('altura').Value / 100;
    let resultado = document.getElementById('resultado');

    if(altura !=="" && peso !==""){
    
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";
     
        if(imc < 18.5){
          mensagem = "Abaixo do peso!"
        }else if(imc < 25){
          menssagem = "Você está com peso ideal!"
        }else if(imc < 30){
          messagem = "Voçê esta levemente acima do peso!"
        }else if(imc < 35){
          menssagem = "Cuidado; Obesidade grau I"
        }else if(imc < 40){
          menssagem = "Cuidado; Obesidade grau II"
        }else{
          mensagem = "Cuidado; Obesidade grau III"
        }    
       
        resultado.textContent = `Seu IMC é ${imc}. ${menssagem}`;
     
     }else{
       resultado.textContent = "Preencha todos os campos!!!"
     }
     
     
   }
   
   botaoCalcular.addEventListener('click', calculandoIMC);