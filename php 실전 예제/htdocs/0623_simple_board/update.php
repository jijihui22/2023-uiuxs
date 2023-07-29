<?php
  require_once('config.php');
  $number = $_GET['number'];

  $sql = "SELECT * FROM board";//리절트에 있는것을 배열, 연관배열, 순번으로 가져올지
  $result = mysqli_query($conn, $sql); 

  //수정할 넘버를 넘겨줘야 한다
  //그리고 input value에 값을 넣어준다


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글수정 - Message Board</title>
</head>
<body>
    <h1>Message Board</h1>

    <?php
        if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
          //post방식은 사용자가 입력한 글이 있어야함
          //화면에 표시안되고 넘길 값을 hidden으로 다
    ?>
    <h2>글수정</h2>
    <form action="insert_update.php" method="POST"><!-- insetrt.php는 기존에 글쓰는거고 insert_update.php로 변경해야함 -->
          <input type="hidden" name="number" value="<?= $number ?>">
    <p>
            <label for="username">이름: </label>
            <input type="text" id="username" name="name" value="<?= $row["name"] ?>">
        </p>
        <p>
            <label for="usermsg">메시지: </label>
            <textarea name="message" id="usermsg" cols="30" rows="10" : ><?= $row["message"] ?></textarea>
        </p>
        <input type="submit" value="전송">
    </form>
    <?php
        }
    ?>

    <hr>
    <a href="index.php">home</a>
    <hr>
    
</body>
</html>
