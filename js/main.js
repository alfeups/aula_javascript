
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}

function redirecionar(){
    window.open("https://www.linkedin.com/in/alfeu-silva-701ab4200/");
    //window.location.href="https://www.linkedin.com/in/alfeu-silva-701ab4200/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
};

function funcaoChange(elemento){
    console.log(elemento.value)
}

function load(){
    alert("Página carregada.");
}


/* Criando função
function soma(n1, n2){
    return n1+n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
} 


var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));


//alert(soma(5, 10));
//alert(setReplace("Vai japão", "Japão", "Brazil"));
*/

/* DATA
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

/* FOR CONDITION
var count;
for (count=0; count<=5; count++){
    alert(count)
};

/* ESTRUTURA DE REPETICAO
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}; */

/* ESTRUTURA DE REPETICAO
var idade = prompt("Qual a sua idade?");
if(idade>=18) { 
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}; */

/* LISTA DE DICIONARIOS
var fruta = ["maça", "pêra", "laranja"];
var frutas = [{ nome: "maça", cor: "vermelho"}, { nome: "uva", cor: "roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome); 
*/

//lista.push("uva"); // adicionar item no final da lista
// lista.pop(); // tirar ultimo item da lista
// console.log(lista[0]); // primeiro index da lista
// console.log(lista.reverse()); // index do ultimo pro primeiro
// console.log(lista.toString()[0]); // transformar lista pra string
// console.log(lista.join( " "));   // juntar ou seperar itens ta lista com caracteres ou espaço

/* CRIANDO VARIAVEIS 
// Criando váriaveis
var nome = "Alfeu Pereira";
var idade = "29";
var frase = "Do no stop, pal!"
// Criando um alert( nome + " tem "+ idade + " anos ");

// Criando console.log
console.log(nome);
console.log(idade);
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase) */