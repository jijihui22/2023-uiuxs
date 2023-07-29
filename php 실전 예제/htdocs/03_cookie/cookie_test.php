<?php
  // setcookie(이름, 값, 만기일, '/')
  $cookieName = 'city';
  $cookieValue = 'seoul';
  // setcookie($cookieName, $cookieValue, time()+60, '/')//60s있다 사라진다로 만든거
  setcookie($cookieName, $cookieValue, time()-60, '/')//60s있다 사라진다로 만든거
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>php cookie</title>
</head>
<body>
  <H1>cookie</H1>
  <?php
    if(isset($_COOKIE[$cookieName])){
      echo "{cookieName}쿠키가 생성되었습니다";
    }else{
      echo "{cookieName}쿠키가 생성되지 않았습니다";
    }
  ?>
</body>
</html>