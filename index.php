<?php

if (isset($_GET['host'])) {
	$_SERVER['HTTP_HOST'] = $_GET['host'];
}

if (!isset($_SERVER['HTTP_HOST'])) {
	header('Status: 400');
	echo 'No "Host" header found.';
}

if (strpos($_SERVER['HTTP_HOST'], 'www.') === 0) {
	header('Location: http://' . substr($_SERVER['HTTP_HOST'], 4), true, 301);
	exit;
}

switch ($_SERVER['HTTP_HOST']) {
	case 'metzijnbieberkapsel.be':
		require_once('coiffure.html');
		break;
	case 'metzijnrollen.be':
		require_once('tieterij.html');
		break;
	default:
		header('Status: 404');
		echo 'Unknown host requested.';
}
