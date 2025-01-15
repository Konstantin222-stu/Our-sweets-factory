<?php
$mess = "Хочет проконсультироваться, "." обращение от ".$_POST['name']." номер телефона ".$_POST['phone']." почта ".$_POST['email'];
$headers =	'From: fabrica@gmail.com' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
if (isset($_POST['phone']))
	if (mail("fabrick@gmail.com", $mess, $headers)) {
		header("Location: index.html");
	} else {
		header("Location: index.html");
	}
?>