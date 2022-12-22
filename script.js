
let arrayFilmesCatalogo = [
    {
        
        nome: "Thor",
        lancamento: 2011,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9f/Thor_Poster.jpg/250px-Thor_Poster.jpg"
    },
    {
        
        nome: "Homem-Aranha",
        lancamento: 2017,
        imagem: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg"
        
    },
    {
        
        nome: "Pantera Negra",
        lancamento: 2018,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg"
        
    },
    {
        nome: "Vingadores Ultimato",
        lancamento: 2019,
        imagem: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"
    },
];

function bubbleSortRec(arrayFilmesCatalogo, tam = arrayFilmesCatalogo.length) {
    if (tam <= 1) return;

    let trocas = 0;

    for (let i=0; i<tam-1; i++) {
        if (arrayFilmesCatalogo[i].lancamento > arrayFilmesCatalogo[i+1].lancamento) {
            let aux = arrayFilmesCatalogo[i].lancamento;
            arrayFilmesCatalogo[i].lancamento = arrayFilmesCatalogo[i+1].lancamento;
            arrayFilmesCatalogo[i+1].lancamento = aux;
            trocas++;
        }
    }

    if (trocas == 0) return arrayFilmesCatalogo;

    bubbleSortRec(arrayFilmesCatalogo, tam - 1);

    return arrayFilmesCatalogo
}

console.log("O array foi ordenado com bubble sort");

function buscaFilmeBinaria(arrayFilmesCatalogo, filme, ini = 0, fim = arrayFilmesCatalogo.length - 1) {
    if (fim < ini) return -1;

    const meio = Math.floor((ini + fim)/2);
    
    if (filme.lancamento == arrayFilmesCatalogo[meio].lancamento) return meio;
    else if (filme.lancamento > arrayFilmesCatalogo[meio].lancamento)
        return buscaFilmeBinaria(arrayFilmesCatalogo, filme, meio + 1, fim);
    else
        return buscaFilmeBinaria(arrayFilmesCatalogo, filme, ini, meio - 1);
}

console.log(buscaFilmeBinaria(arrayFilmesCatalogo, {
    lancamento: 2017
}));



//filme 1

let nome1 = window.document.getElementById("filme1");
nome1.innerHTML = arrayFilmesCatalogo[0].nome;

let lancamento1 = window.document.getElementById("lancamento1");
lancamento1.innerHTML = arrayFilmesCatalogo[0].lancamento;

let imagem1 = window.document.getElementById("imagens");
img = document.createElement("IMG");
img.src = arrayFilmesCatalogo[0].imagem;
img.style.width = "200px";
img.style.height = "250px";
document.getElementById('imagens').appendChild(img);

//filme 2

let nome2 = window.document.getElementById("filme2");
nome2.innerHTML = arrayFilmesCatalogo[1].nome;

let lancamento2 = window.document.getElementById("lancamento2");
lancamento2.innerHTML = arrayFilmesCatalogo[1].lancamento;

let imagem2= window.document.getElementById("imagens2");
img = document.createElement("IMG");
img.src = arrayFilmesCatalogo[1].imagem;
img.style.width = "200px";
img.style.height = "250px";
document.getElementById('imagens2').appendChild(img);

//filme 3

let nome3 = window.document.getElementById("filme3");
nome3.innerHTML = arrayFilmesCatalogo[2].nome;

let lancamento3 = window.document.getElementById("lancamento3");
lancamento3.innerHTML = arrayFilmesCatalogo[2].lancamento;

let imagem3= window.document.getElementById("imagens3");
img = document.createElement("IMG");
img.src = arrayFilmesCatalogo[2].imagem;
img.style.width = "200px";
img.style.height = "250px";
document.getElementById('imagens3').appendChild(img);

//filme 4

let nome4 = window.document.getElementById("filme4");
nome4.innerHTML = arrayFilmesCatalogo[3].nome;

let lancamento4 = window.document.getElementById("lancamento4");
lancamento4.innerHTML = arrayFilmesCatalogo[3].lancamento;

let imagem4= window.document.getElementById("imagens4");
img = document.createElement("IMG");
img.src = arrayFilmesCatalogo[3].imagem;
img.style.width = "200px";
img.style.height = "250px";
document.getElementById('imagens4').appendChild(img);

