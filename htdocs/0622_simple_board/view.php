<?php
  require_once('config.php');

  $number = $_GET['number'];

  $sql = "SELECT * FROM board WHERE idx > '{$number}'";
  $result = mysqli_query($conn, $sql); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글쓰기</title>
</head>
<body>
    <h1>Message Board</h1>

    <h2>글읽기</h2>
    <?php
        if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    ?>
        <h3>글번호 :<?php $row["idx"]?></h3>
        <h3>글제목 :<?php $row["name"]?></h3>
        <div>

        </div>
    <?php
        }
    ?>
    <hr>
    <a href="idex.html">home</a>
    <hr>
</body>
</html>
