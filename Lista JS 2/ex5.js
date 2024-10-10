const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = parseFloat(frm.n1.value)
    const altura = parseFloat(frm.n2.value)

    const imc = peso / (altura**2);

    if (imc < 16){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você se enquadra como magreza grave`
    }

    if (imc >= 16 && imc <= 16.9){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você se enquadra como magreza moderada`
    }

    if (imc >= 17 && imc <= 18.5){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você se enquadra como magreza leve`
    }

    if (imc >= 18.6 && imc <= 24.9){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você está com o peso ideal `
    }

    if (imc >= 25 && imc <= 29.9){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você está com sobrepeso `
    }

    if (imc >= 30 && imc <= 34.9){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você está com obesidade grau I` 
    }

    if (imc >= 35 && imc <= 39.9){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você está com obesidade grau II, ou severa`
    }

    if (imc >= 40){
        resp.innerHTML = `O IMC atual é ${imc.toFixed(2)}, você está com obesidade grau III, ou mórbida`
    }
})