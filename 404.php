<?php

header('Content-Type: text/plain; charset=UTF-8');
$urlInfo = parse_url($_SERVER['REQUEST_URI']);
var_dump($urlInfo);
