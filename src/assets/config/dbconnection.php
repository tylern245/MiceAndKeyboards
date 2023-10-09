<?php
require 'credentials.php';

function pdo_connect_mysql() {
    $host = 'localhost';
    $db   = 'keyboard_store_schema';
    $user = USERNAME;
    $pass = PASSWORD;
    $charset = 'utf8mb4';

    try{
	    $dsn = "mysql:host=".$host.";dbname=".$db.";charset=".$charset;
	    $pdo = new PDO($dsn, $user, $pass);
	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    return $pdo;
    }catch(PDOException $e){
        throw new PDOException($e->getMessage(), (int)$e->getCode());
    }
}

?>
