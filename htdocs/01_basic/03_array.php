<?php
/*
$arr = array();
$arr[0] = 'html';
$arr[1] = 'css';
$arr[2] = 'javascript';
*/
$arr = array('html','css','javascript');
echo $arr[0];

if(isset($arr[3])){
    echo $arr[3];
}else{
  echo '배열 arr[3] 값은 없습니다';
}
?>
<hr>
<?php
  for($i = 0; $i < count($arr); $i++){
    echo $arr[$i].'<br>';
  }
?>
<hr>
<?php
foreach($arr as $ar){
  echo $ar.'<br>';
} 
?>
<h2>연관배열</h2>
<?php
/*
$fruits = array();
$fruits['apple'] = 1000;
$fruits['banana'] = 2000;
$fruits['orange'] = 1500;
*/
$fruits = array('apple'=>1000, 'banana'=>2000, 'orange'=>1500);

var_dump($fruits);
var_dump($arr);
echo $arr[0];
echo $fruits['apple'];
?>
<hr>
<?php
  foreach($fruits as $fruit){ // $fruit=값
    echo $fruit.'<br>';
  }
?>
<hr>
<?php
  foreach($fruits as $key=> $value){// $fruit=연관배열명, $value=값
    echo $key.'-'.$value.'<br>';
  }
?>