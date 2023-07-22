<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Session test</title>
</head>
<body>
  <?php
    if(isset($_SESSION['city'])){
      echo "당신은 {$_SESSION['city']}{$_SESSION['gu']}에 있습니다.";
      echo "<a href='session_del.php'>세션해지</a>";
    } else{
      echo "세션 정보가 없습니다";
      echo "<a href='session.php'>세션생성</a>";
    }
  ?>
  
</body>
</html>