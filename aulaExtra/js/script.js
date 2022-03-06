function verificaAluno(){
  const nomeAluno = document.querySelector("#alunoTable");
  const entrada = document.querySelector("input#nome").value;
  nomeAluno.textContent = entrada;
   
  const dataValor = document.querySelector("#resData");
  const dataResultado = document.querySelector("#dataInicio").value;
  dataValor.textContent = dataResultado;

  const materia = document.querySelector("#materiaTable");
  const entradaMateria = document.querySelector("input#materia").value;
  materia.textContent = entradaMateria;

  const horaInicial = document.querySelector("#horaInicial")
  const entradaHoraInicial = document.querySelector("#horaInicialInput").value;
  horaInicial.textContent = entradaHoraInicial;
  
  const horaFinal = document.querySelector("#horaFinal")
  const entradaHoraFinal = document.querySelector("#horaFinalInput").value;
  horaFinal.textContent = entradaHoraFinal;

  const dificuldade = document.querySelector("#dificuldade");
  const entradaDificuldade = document.querySelector(".form-select").value;
  dificuldade.textContent = entradaDificuldade;

  if(entradaDificuldade == 1){
    dificuldade.textContent = "Fácil";
  }else if(entradaDificuldade == 2){
    dificuldade.textContent = "Médio";
  }else if(entradaDificuldade == 3){
    dificuldade.textContent = "Difícil";
  }else{
    dificuldade.textContent = "Selecione";
  }

}


function limparDados(){
  const nomeAluno = document.querySelector("#alunoTable");
  const entrada = document.querySelector("input#nome").value;
  nomeAluno.textContent = entrada.remove;
   
  const dataValor = document.querySelector("#resData");
  const dataResultado = document.querySelector("#dataInicio").value;
  dataValor.textContent = dataResultado.remove;

  const materia = document.querySelector("#materiaTable");
  const entradaMateria = document.querySelector("input#materia").value;
  materia.textContent = entradaMateria.remove;

  const horaInicial = document.querySelector("#horaInicial")
  const entradaHoraInicial = document.querySelector("#horaInicialInput").value;
  horaInicial.textContent = entradaHoraInicial.remove;
  
  const horaFinal = document.querySelector("#horaFinal")
  const entradaHoraFinal = document.querySelector("#horaFinalInput").value;
  horaFinal.textContent = entradaHoraFinal.remove;

  const dificuldade = document.querySelector("#dificuldade");
  const entradaDificuldade = document.querySelector(".form-select").value;
  dificuldade.textContent = entradaDificuldade.remove;

  if(entradaDificuldade == 1){
    dificuldade.textContent = "Fácil";
  }else if(entradaDificuldade == 2){
    dificuldade.textContent = "Médio";
  }else if(entradaDificuldade == 3){
    dificuldade.textContent = "Difícil";
  }else{
    dificuldade.textContent = "Selecione".remove;
  }
  
}
