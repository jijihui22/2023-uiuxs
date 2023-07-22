<?php
  session_start();//세션을 사용해서 이 페이지에서 구현하겠다
  $title = '홈';
  require_once('inc/function.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title; ?></title>
</head>
<body>
  <h1><?= $title; ?></h1>
  <ul>
    <li><a href="login.php">로그인</a></li>
    <li><a href="logout.php">로그아웃</a></li>
  </ul>
</body>
</html>