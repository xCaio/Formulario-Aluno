$(document).ready(function() {
    $('#example').DataTable();
} );

//AJAX
$(document).ready(function() {
    $('#example').DataTable( {
        "paging": "false",
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

//METODO POST
// $(document).ready(function() {
//     $('#example').DataTable( {
//         "processing": true,
//         "serverSide": true,
//         "ajax": {
//             "url": "scripts/post.php",
//             "type": "POST"
//         },
//         "columns": [
//             { "data": "first_name" },
//             { "data": "last_name" },
//             { "data": "position" },
//             { "data": "office" },
//             { "data": "start_date" },
//             { "data": "salary" }
//         ]
//     } );
// } );