<?php
    require_once("config.php");
    $nome = $_POST["nome"];
    $materia = $_POST["materia"];
    $data = $_POST["data"];
    $horaInicio = $_POST["horaInicio"];
    $horaFinal = $_POST["horaFinal"];
    $dificuldade = $_POST["dificuldade"];
    
    $sql = "INSERT INTO alunos(nome_aluno, materia, data, hora_inicio, hora_final, dificuldade) VALUES('".$nome."', '".$materia."', '".$data."', '".$horaInicio."', '".$horaFinal."', '".$dificuldade."')";
    $result = $connection -> query($sql);

    if(!result){
        http_response_code(500);
        echo json_encode(["error" => "Erro ao inserir no banco de dados"]);
    }else{
        http_response_code(500);
        echo json_encode(["sucess" => "Salvo no banco de dados"]);
    }


?>