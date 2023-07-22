<?php
  session_start();

  $_SESSION['city']= '서울시';
  $_SESSION['gu']= '종로구';


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Session</title>
</head>
<body>
  <h1>세션</h1>
  <a href="session_test.php">확인</a>
</body>
</html>