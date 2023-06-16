<?php
	$server = "localhost";
	$user = "root";
	// $pass = "PatataSalvaje";
    $pass = "FullStackVigo";
	$db = "CIneBuleriaDB";
	$connection = mysqli_connect($server, $user, $pass, $db)
		or die("Conection Error");
 
 
	$getpeliculas = "select * from peliculas";
	$result = mysqli_query($connection, $getpeliculas)
		or die ("Insert Error");
 
 
	while($row = mysqli_fetch_array($result)) {
	    echo $row['pelicula'];
	}
?>