<?php
echo 'Open file... ';

echo '<br> -- Content file -- <br>';

$url = fopen('file.txt.', 'r');

$str = '';

while($t = fgets($url))
    $str .= $t;

echo $str;

echo '<br> -- End content file -- <br>';

echo 'Finished';