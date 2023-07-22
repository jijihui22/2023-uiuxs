<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>함수</title>
</head>
<body>
  <h1>함수</h1>
  <?php
    function sum($a,$b){
      $result = $a + $b;
      return $result;
    }
    $result = sum(20,60);
    echo $result;

    // $langs = array('html','css','javascript');
    $langs = ['html','css','javascript'];
    var_dump($langs);
  ?>
  <hr>
  <?php
    // echo '<pre>';
    // print_r($langs);
    // echo '</pre>';

    function output($input){
      echo '<pre>';
      print_r($input);
      echo '</pre>';
    }
    output($langs);

  ?>
  <hr>
  <?php
    $greeting = 'hello, world';

    function add($a, $b){
      global $greeting;//php는 전역변수를 안에서 못씀 쓸수 있게 해주는 게 global
      echo $greeting;
      $rs = $a + $b;
      return $rs;
    }

    $rs2 = add(10,20);
    echo $rs2;
  ?>
  <h2>지역변수</h2>
  <?php
    function varFunc(){
      $var = 10; //지역변수
      echo "함수 내부에서 호출한 변수 var의 값은{$var}이다";
    }
    varFunc();
    // echo "함수 내부에서 호출한 변수 var의 값은{$var}이다";//이렇게는 var이 지역변수라 못씀 에러
  ?>
  <h2>전역변수</h2>
  <?php
  $var = 10; //전역변수 선언
    function varFunc2(){     
      //echo "함수 내부에서 호출한 변수 var의 값은{$var}이다"; //global선언 전이라 에러났다
      // global $var;
      // echo "함수 내부에서 호출한 변수 var의 값은{$var}이다";
     
      echo "함수 내부에서 호출한 변수 var의 값은{$GLOBALS['var']}이다";
    }
  varFunc2();
  echo "함수 밖에서 호출한 변수 var의 값은{$var}이다";//출력됨
  ?>
 <h2>정적변수(staic variable)</h2>
  <?php
    function counter(){
      $count = 0;
      echo $count.'<br>';
      $count++;
      echo $count.'<br>';
    }
    counter();
    counter();
  ?>  
  <hr>
  <?php
    function counter2(){
      static $count2 = 0;//static  화면이 초기화되면 사용해야되면 사용
      echo $count2.'<br>';
      $count2++;
      echo $count2.'<br>';
    }
    counter2();
    counter2();
  ?>  
</body>
</html>