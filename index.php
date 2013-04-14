<?php

if (isset($_GET['host'])) {
	$_SERVER['HTTP_HOST'] = $_GET['host'];
}

if (!isset($_SERVER['HTTP_HOST'])) {
	header('Status: 400');
	echo 'No "Host" header found.';
}

switch ($_SERVER['HTTP_HOST']) {
	case 'metzijnbieberkapsel.be':
	case 'www.metzijnbieberkapsel.be':
		require_once('coiffure.html');
		break;
	default:
		header('Status: 404');
		echo 'Unknown host requested.';
}
