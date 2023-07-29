<?php
  require_once('config.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글쓰기 - Message Board</title>
</head>
<body>
    <h1>Message Board</h1>

    <h2>글쓰기</h2>
    <form action="insert.php" method="POST">
        <p>
            <label for="username">이름: </label>
            <input type="text" id="username" name="name">
        </p>
        <p>
            <label for="usermsg">메시지: </label>
            <textarea name="message" id="usermsg" cols="30" rows="10"></textarea>
        </p>
        <input type="submit" value="전송">
    </form>

    <hr>
    <a href="index.php">home</a>
    <hr>
    
</body>
</html>
