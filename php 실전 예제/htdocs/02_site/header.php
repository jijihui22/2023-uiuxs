<?php
  //타이틀 변수명이 없으면 비워놓자 isset(식별자로)
  if(!isset($title)){
    $title = 'abc';
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title; ?></title>
</head>
<body>
  <header>
    <h1><a href="index.php"></a>ABC</h1>
    <nav>
      <ul>
        <li><a href="about.php">about</a></li>
        <li><a href="aworks.php">works</a></li>
        <li><a href="login.php">login</a></li>
        <li><a href="search.php">search</a></li>
      </ul>
    </nav>
  </header>