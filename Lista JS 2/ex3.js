
const frm = document.querySelector("form");
const validade = document.getElementById("val");
const tipo = document.getElementById("tipo");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const l1 = parseInt(frm.n1.value)
    const l2 = parseInt(frm.n2.value)
    const l3 = parseInt(frm.n3.value)

    if (l1 + l2 >= l3 || l1 + l3 >= l2 || l3 + l2 >= l1){

        validade.innerText = `O triangulo informado é válido`

        if(l1 == l2 == l3){
            tipo.innerText = `O triangulo informado é escaleno`
        }

        else if(l1 != l2 && l2 != l3){
            tipo.innerText = `O triangulo informado é equilatero`
        }

        else if((l1 == l2 && l2 != l3) || (l1 != l2 && l2 == l3) || (l1 == l3 && l3 != l2)){
            tipo.innerText = `O triangulo informado é isoceles`
        }
    }
    else{
        validade.innerText = `O triangulo informado é inválido`
    }
})