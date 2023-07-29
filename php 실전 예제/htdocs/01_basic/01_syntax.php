<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php 기초</title>
</head>
<body>
  <h1>php 기초 </h1>
  <?php echo 'hi' ;?>
  <h2></h2>
  <?php 
    //한줄 주석

    /* 여러줄
    주석 */

    #주석
  ?>
  <h3>변수</h3>
  <?php
    $name = '홍길동';
    // echo '반갑습니다' . $name;//둘을 잇는 거는 .
    // echo "반갑습니다! $name";//큰 따움표(  자바스크립트 백틱과 같이 쓰임)만 안에 변수명 같은 걸 확인해서 보여줌 자바스크립트 백틱과 같이 쓰임
    // echo '반갑습니다! $name =에러
  ?>
</body>
</html>