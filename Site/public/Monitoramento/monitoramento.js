window.onload = atualizarGrafico(1)

// function atualizacaoPeriodica() {
//     obterdados(1);
//     obterdados(2);

//     function sendData() {
//         var http = new XMLHttpRequest();
//         http.open('POST', 'http://localhost:3000/api/sendData', false);
//         http.send(null);
//     }

//     setInterval(() => {
//         sendData();
//     }, 2000);
//     setTimeout(atualizacaoPeriodica, 5000);
// }

// function obterdados(idAquario) {
//     fetch(`/medidas/tempo-real/${idAquario}`)
//         .then(resposta => {

//             if (resposta.ok) {
//                 resposta.json().then(resposta => {

//                     console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

//                     var dados = {
//                         temperatura: resposta[0].temperatura,
//                     }

//                     alertar(resposta[0].temperatura, idAquario);
//                 });
//             } else {

//                 console.error('Nenhum dado encontrado ou erro na API');
//             }
//         })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
//         });

// }



//     medida_temp.innerHTML = `${novoregistro[0].temperatura}`
//     medida_umid.innerHTML = `${novoRegistro[0].umidade}`
// }





function alertar(temperatura, umidade) {

    if (temperatura != null) {
        medida_temp.innerHTML = `${temperatura}`
        TempColor(medida_temp.innerHTML)
    }
    if (umidade != null) {
        medida_umid.innerHTML = `${umidade}`
        UmidColor(medida_umid.innerHTML)
    }
  
    if (temperatura >= limitesTemp.maxPerigo) {
      console.log("caiu no 1");
    } else if (temperatura >= limitesTemp.quente) {
      console.log("caiu no 2");
    } else if (temperatura < limitesTemp.max && temperatura > limitesTemp.min) {
      console.log("caiu no 3");
    } else if (temperatura >= limitesTemp.min) {
      console.log("caiu no 4");
    } else if (temperatura >= limitesTemp.minPerigo) {
      console.log("caiu no 5");
    }
    // if (temperatura >= limitesTemp.maxPerigo) {
    //   classe_cardTemp = "card-alert card-alertTemp";
    //   classe_temperatura = "aviso max-perigo";
    //   console.log("caiu no 1");
    // } else if (temperatura >= limitesTemp.quente) {
    //   classe_cardTemp = "card-alert card-alertTemp";
    //   classe_temperatura = "aviso max";
    //   console.log("caiu no 2");
    // } else if (temperatura < limitesTemp.max && temperatura > limitesTemp.min) {
    //   // classe_TempKPI = "status-Temp ideal";
    //   // classe_temperatura = "aviso ideal";
    //   console.log("caiu no 3");
    // } else if (temperatura >= limitesTemp.min) {
    //   classe_cardTemp = "card-alert card-alertTemp";
    //   classe_temperatura = "aviso min ";
    //   console.log("caiu no 4");
    // } else if (temperatura >= limitesTemp.minPerigo) {
    //   classe_cardTemp = "card-alert card-alertTemp";
    //   classe_temperatura = "aviso min-perigo ";
    //   console.log("caiu no 5");
    // }
  
    if (umidade >= limitesUmi.maxPerigo) {
      console.log("caiu no 1");
    } else if (umidade >= limitesUmi.quente) {
      console.log("caiu no 2");
    } else if (umidade < limitesUmi.max && umidade > limitesUmi.min) {
      console.log("caiu no 3");
    } else if (umidade >= limitesUmi.min) {
      console.log("caiu no 4");
    } else if (umidade >= limitesUmi.minPerigo) {
      console.log("caiu no 5");
    }

    // alterando

}

function TempColor(medida_temp) {

   var acima = medida_temp - 30
   var abaixo = 20 - medida_temp

  
   if (medida_temp >= 21 && medida_temp <= 29){
       tooltip_temp.style = "background-color: green"
       text_temp.innerHTML = "Temperatura adequada"
       temp_alerta.src = "../assets/Identidade Visual/tudo-certo.png" 
       temp_alerta.style = "width: 78px; margin-top: 8px"
   }
   else if (medida_temp > 29 && medida_temp <= 30 || medida_temp >= 20 && medida_temp < 21 ) {
       tooltip_temp.style = "background-color: orange"
       text_temp.innerHTML = "Alerta - Risco de ultrapassagem do limite"
       temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
       temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"


   }
   else if (medida_temp > 30) {
       tooltip_temp.style = "background-color: red"
       text_temp.innerHTML = `${acima}ºC acima do limite`
       temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
       temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
   }

   else if (medida_temp < 20) {
       tooltip_temp.style = "background-color: red"
       text_temp.innerHTML = `${abaixo}ºC abaixo do limite`
       temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
       temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
   }


   medida_temp.innerHTML = `${medida_temp} °C`
}

function UmidColor(medida_umid) {

    var acima2 = medida_umid - 75
    var abaixo2 = 56 - medida_umid


    if (medida_umid > 60 && medida_umid <= 70){
        tooltip_umid.style = "background-color: green"
        text_umid.innerHTML = `Umidade adequada`
        umid_alerta.src = "../assets/Identidade Visual/tudo-certo.png" 
        umid_alerta.style = "width: 78px; margin-top: 8px"

    }
    else if (medida_umid > 70 && medida_umid <= 75 || medida_umid >= 56 && medida_umid <= 60 ) {
        tooltip_umid.style = "background-color: orange"
        text_umid.innerHTML = `Alerta - Risco de ultrapassagem do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    else if (medida_umid < 56) {
        tooltip_umid.style = "background-color: red"
        text_umid.innerHTML = `${abaixo2}% abaixo do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    else if (medida_umid > 75 ) {
        tooltip_umid.style = "background-color: red"
        text_umid.innerHTML = `${acima2}% acima do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    
    
    medida_umid.innerHTML = `${medida_umid}%`
}

function obterdados(idAquario) {
fetch(`/medidas/tempo-real/${idAquario}`)
  .then((resposta) => {
    if (resposta.ok) {
      resposta.json().then((resposta) => {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

        alertar(resposta[0].temperatura, resposta[0].umidade);

      });
    } else {
      console.error("Nenhum dado encontrado ou erro na API");
    }
  })
  .catch(function (error) {
    console.error(
      `Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`
    );
  });
  setTimeout(() => atualizarGrafico(idAquario), 5000);
}



function atualizarGrafico(idAquario) {

proximaAtualizacao = setTimeout(
  () => atualizarGrafico(idAquario),
  5000
);
obterdados(idAquario);

}
