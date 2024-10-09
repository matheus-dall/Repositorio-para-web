const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num1 = parseFloat(frm.n1.value)
    const num2 = parseFloat(frm.n2.value)
    const num3 = parseFloat(frm.n3.value)

    const media = (num1 + num2 + num3) / 3

    if (media >= 7){
        const resultado = "Aprovado"
        resposta.innerText = `A media entre ${num1},${num2},${num3} é ${media}, o aluno foi ${resultado}`

    }
    else if (media >= 4 && media < 7){
        const resultado = "Recuperação"
        resposta.innerText = `A media entre ${num1},${num2},${num3} é ${media}, o aluno foi ${resultado}`
 
    }
    else if (media <= 3.9){
        const resultado = "Reprovado"
        resposta.innerText = `A media entre ${num1},${num2},${num3} é ${media}, o aluno foi ${resultado}`

    }
})