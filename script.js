//variáveis: nome, peso, altura, quantidade de pacientes, IMC.
let totalPacientes = 0;
let somaIMC = 0;
let qtdBaixoPeso = 0;
let qtdEutrofico = 0;
let qtdSobrepeso = 0;
let qtdObesidadeI = 0;
let qtdObesidadeII = 0;
let qtdObesidadeIII = 0;

//Criei uma Array para armazenar as informações dos pacientes
let pacientes = [];

//Essa função calcula o IMC dos pacientes
function calculoIMC(peso, altura) {
    return peso / (altura * altura)
}

//Essa função classifica a situação dos pacientes baseado no IMC
function classificacaoIMC(imc){
    if(imc < 18.5){
        return "Baixo Peso";
    }
    else if(imc >= 18.5 && imc < 25){
        return "Eutrófico";
    }
    else if(imc >= 25 && imc < 30){
        return "Sobrepeso";
    }
    else if(imc >= 30 && imc < 35){
        return "Obesidade I";
    }
    else if(imc >= 35 && imc < 40){
        return "Obesidade II;"
    }
    else{
        return "Obesidade III";
    }
}

//Essa função faz o cadastro dos pacientes
function cadastroPaciente(nome, peso, altura){
    let imc = calculoIMC(peso, altura);
    let classificacao = classificacaoIMC(imc);
    pacientes.push({
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        classificacao: classificacao
    });

    totalPacientes++;
    somaIMC =+ imc;
    if(imc < 18.5){
        qtdBaixoPeso++;
    }
    else if(imc >= 18.5 && imc < 25){
        qtdEutrofico++;
    }
    else if(imc >= 25 && imc < 30){
        qtdSobrepeso++;
    }
    else if(imc >= 30 && imc < 35){
        qtdObesidadeI++;
    }
    else if(imc >= 35 && imc < 40){
        qtdObesidadeII++;
    }
    else{
        qtdObesidadeIII++;
    }
}

let continuar = true;

//O código continua funcionando enquanto o usuário desejar inserir pacientes
while(continuar){
    let nome = prompt("Insira o nome do paciente");
    //A função "parseFloat" converte uma string em um número de ponto flutuante
    let peso = parseFloat(prompt("Insira o peso do paciente"));
    let altura = parseFloat(prompt("Insira o altura do paciente"));
    cadastroPaciente(nome, peso, altura);
    continuar = confirm("Deseja cadastrar outro paciente?");
}

let mediaIMC = somaIMC / totalPacientes

pacientes.forEach (paciente => {
    console.log("RESUMO DO PACIENTE")
    console.log("Nome do paciente: " + paciente.nome);
    console.log("Peso do paciente: " + paciente.peso);
    console.log("Altura do paciente: " + paciente.altura);
    //Usei "toFixed(2) para definir que o resultado possua apenas duas casas decimais"
    console.log("IMC do paciente: " + paciente.imc.toFixed(2));
    console.log("Classificação do paciente: " + paciente.classificacao);
})

console.log("RESUMO GERAL")
console.log("A quantidade total de pacientes é: " + totalPacientes);
console.log("A média geral de IMC é: " + mediaIMC.toFixed(2));
console.log("A quantidade de pacientes com Baixo peso é: " + qtdBaixoPeso);
console.log("A quantidade de pacientes Eutróficos é: " + qtdEutrofico);
console.log("A quantidade de pacientes com Sobrepeso é: " + qtdSobrepeso);
console.log("A quantidade de pacientes com Obesidade grau I é: " + qtdObesidadeI);
console.log("A quantidade de pacientes com Obesidade grau II é: " + qtdObesidadeII);
console.log("A quantidade de pacientes com Obesidade grau III é: " + qtdObesidadeIII); 