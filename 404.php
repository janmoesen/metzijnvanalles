<?php

header('Content-Type: text/plain; charset=UTF-8');
$urlInfo = parse_url($_SERVER['REQUEST_URI']);

if (isset($urlInfo['path']) && preg_match('/\.js$/', $urlInfo['path'])) {
	header('Status: 200');
	echo 'window.console && console.debug("Nope...");';
}
