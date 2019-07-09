<?php
$ans = [3,2,1,3,3,2,3,1,4,1];
$result = 0;
$q = json_decode($_REQUEST["q"]);
for ($i=0; $i<count($ans); $i++){
    if ($ans[$i] === $q[$i]){
        $result++;
    }
}
echo $result;
?>