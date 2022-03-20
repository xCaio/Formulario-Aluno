//AJAX
$(document).ready(function() {
    $('#example').DataTable( {
        paging: "false",
        searching: false,
        
        "ajax": "./data/arrays.json",
        "columns": [
            {"data" :"nome"},
            {"data" :"materia"},
            {"data" :"data"},
            {"data" :"hora_inicio"},
            {"data" :"hora_fim"},
            {"data" :"dificuldade"}
        ]
    } );
} );

