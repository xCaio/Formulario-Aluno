var nomeAluno;

const confirmar = document.querySelector(".buttons #confirmar");
const cancelar = document.querySelector("#cancelar");
const todaSessao = document.querySelector("section");

//PEGANDO VALOR DO INPUT
const nomeValor = document.querySelector("#nome").value;
// const dataValor = document.querySelector("#data").value;
// const horaInicialValor = document.querySelector("#horaInicial").value
// const horaFinalValor = document.querySelector("#horaFinal").value;
// // const materiaValor = document.querySelector("materia").value;
// const dificuldadeValor = document.querySelector("#select").value;


function verificaAluno(){
  const nomeAluno = document.querySelector("#aluno");
  const entrada = document.querySelector("input").value;
  

  nomeAluno.textContent = entrada;

}



function limparDados(){
nomeValor = document.querySelector("#nome").remove;
dataValor = document.querySelector("#data").remove;
horaInicialValor = document.querySelector("#horaInicial").remove
horaFinalValor = document.querySelector("#horaFinal").remove;
materiaValor = document.querySelector("materia").remove;
dificuldadeValor = document.querySelector("#select").remove;
}