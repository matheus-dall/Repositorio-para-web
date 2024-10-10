const frm = document.querySelector("form");
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const n1 = parseInt(frm.n1.value)
   

    if (n1 >= 18){

        resp.innerText = `O sujeito é de maior`

        
    }
    else{
        resp.innerText = `O sujeito é de menor`
    }
})