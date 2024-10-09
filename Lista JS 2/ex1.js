const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = parseFloat(frm.n1.value)

    if (num%2 == 0){
        
        resposta.innerText = `O numero ${num} é par`
    
    }
    else if (num%2 != 0){

        resposta.innerText = `O numero ${num} é impar`
    }
    
})