<?php
    $host="localhost";
    $user="root";
    $password="";
    $dbName="crud";

    $connection = new mysqli($host,$user,$password,$dbName);

    if($connection->connect_error){
        die("Connection Failed".$connection->connect_error);
    }
?>