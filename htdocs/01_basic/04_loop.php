<h1>while문</h1>
<?php
  $i=0;
  while($i<5){
    echo $i++.'<br>';
  }
?>
<hr>
<?php
  $langs = array('html', 'css', 'javascript');
  $i=0;
  while($i<count($langs)){
    echo $langs[$i].'<br>';
    $i++;
  }
?>

<h2>do/while 문</h2>
<?php
  $i=0;
  do{
    echo $i++.'<br>';
  }while($i<5); 
?>


<h2>for 문</h2>
<?php
  for($i = 0;$i<5;$i++){
    //echo $i,'<br>';
    echo "{$i}<br>";
  }
?>
<h2>forEach 문</h2>
<?php 
  $nums = array(0,2,4,6,8);
  forEach($nums as $num){
    // echo '변수명 $nums의 현재값은 '.$nums.'입니다';
    echo "변수명 \$nums의 현재값은 {$num}입니다.";
  }
?>
<h2>연관 배열</h2>
<?php 
  $scores = array(
    '국어'=>80,
    '영어'=>90,
    '수학'=>100,
    '과학'=>95
  );

  // forEach($scores as $score){
  //   echo "배열명 \$scores의 국어점수는 {$score}입니다.<br>";
  // }

  forEach($scores as $keys=>$score){
    echo "배열명 \$scores에 키값'{$key}'점수는 {$score}입니다.<br>";
  }
?>
