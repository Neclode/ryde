<?php
$ch = curl_init('https://api.translink.ca/rttiapi/v1/stops/51546?apikey=S6F17Wr4uZO8rLOA31vO');
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept:application/json'
));

$r = curl_exec($ch);
curl_close($ch);
//var_dump($r);
$r = substr_replace($r ,-4);
?>